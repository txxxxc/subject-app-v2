import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { getRepository } from 'typeorm';

import setup from './setup';
import { resolvers } from './resolvers';
import { User } from './entity/User';
import { Course } from './entity/Course';

const typeDefs = fs
  .readFileSync(path.join(__dirname, '../../graphql/schema.graphql'))
  .toString();

const PORT = 4000;
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
    console.log('🚀 Server ready at http://localhost:4000');
  });
});
