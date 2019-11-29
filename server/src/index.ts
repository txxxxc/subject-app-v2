import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import path from 'path';
import { getRepository } from 'typeorm';
import dotenv from 'dotenv';
import { importSchema } from 'graphql-import';

import setup from './setup';
import { resolvers } from './resolvers';
import { User } from './entity/User';
import { Course } from './entity/Course';

const envPath = path.resolve('../.env');
dotenv.config({ path: envPath });

const URL =
  process.env.NODE_ENV === 'development'
    ? process.env.SERVER_DEVELOPMENT_URL
    : process.env.PRODUCTION_URL;

const typeDefs = importSchema(path.resolve('../graphql/schema.graphql'));
const app = express();

const context = () => ({
  userRepository: getRepository(User),
  courseRepository: getRepository(Course),
});

const apolloServer = new ApolloServer({
  typeDefs: gql`
    ${typeDefs}
  `,
  resolvers: resolvers as any,
  context,
});

apolloServer.applyMiddleware({ app });

app.use(express.static(path.resolve('../client/dist')));

app.get('/', (req, res) => {
  res.render('bundle');
});

setup().then(() => {
  app.listen(process.env.SERVER_DEVELOPMENT_PORT, () => {
    console.log(`🚀 Server ready at ${URL}`);
  });
});
