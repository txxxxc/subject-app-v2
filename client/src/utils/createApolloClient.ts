import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'node-fetch';

export const createApolloClient = () =>
  new ApolloClient({
    link: createHttpLink({
      uri: '/graphql',
      fetch,
    }),
    cache: new InMemoryCache(),
  });
