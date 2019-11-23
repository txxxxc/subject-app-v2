import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
// import fs from 'fs';
import path from 'path';
import { getRepository } from 'typeorm';
import dotenv from 'dotenv';
import { importSchema } from 'graphql-import';

import setup from './setup';
import { resolvers } from './resolvers';
import { User } from './entity/User';
import { Course } from './entity/Course';

const envPath = path.join(__dirname, '../../.env');
dotenv.config({ path: envPath });

const URL =
  process.env.NODE_ENV === 'development'
    ? process.env.SERVER_DEVELOPMENT_URL
    : process.env.PRODUCTION_URL;

const typeDefs = importSchema('src/schema.graphql');
// const typeDefs = importSchema(path.join(__dirname, 'graphql/schema.graphql'));
// const typeDefs = fs.readFileSync(text).toString();

const PORT = 8000;
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

app.get('/', (req, res) => {
  res.send('It works');
});

setup().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server ready at ${URL}`);
  });
});
