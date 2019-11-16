import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import dotenv from 'dotenv';
import path from 'path';

const envPath = path.join(__dirname, '../../.env');
dotenv.config({ path: envPath });

const URL =
  process.env.NODE_ENV === 'development'
    ? process.env.DEV_URL
    : process.env.PRODUCTION_URL;

console.log({ URL });

export const createApolloClient = () =>
  new ApolloClient({
    link: createHttpLink({
      uri: `${URL}/graphql`,
    }),
    cache: new InMemoryCache(),
  });
