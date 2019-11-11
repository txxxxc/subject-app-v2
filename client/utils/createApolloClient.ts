import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import dotenv from 'dotenv';
import path from 'path';

const envPath = path.join(__dirname, '../../.env');
dotenv.config({ path: envPath });

export const createApolloClient = () =>
  new ApolloClient({
    link: createHttpLink({
      uri: `http://localhost:${process.env.PORT}/graphql`,
    }),
    cache: new InMemoryCache(),
  });
