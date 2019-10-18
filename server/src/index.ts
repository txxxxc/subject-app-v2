import Express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { resolvers } from './resolvers';
import { typeDefs } from './schema';
import UserAPI from './datasources/user';
import store from './db/models/index';

const dataSources = () => ({
  userAPI: new UserAPI(store),
});

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

const app = Express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
);
