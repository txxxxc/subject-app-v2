import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import dotenv from 'dotenv';
import path from 'path';
import fetch from 'node-fetch';

const envPath = path.resolve('../.env');
dotenv.config({ path: envPath });

const URL =
  process.env.NODE_ENV === 'development'
    ? process.env.CLIENT_DEVELOPMENT_URL
    : process.env.PRODUCTION_URL;

export const createApolloClient = () =>
  new ApolloClient({
    link: createHttpLink({
      uri: `${URL}/graphql`,
      fetch,
    }),
    cache: new InMemoryCache(),
  });
