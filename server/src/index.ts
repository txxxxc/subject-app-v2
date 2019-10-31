import Express from 'express';
import { ApolloServer } from 'apollo-server-express';
// import { makeExecutableSchema, IResolvers } from 'graphql-tools';
import { resolvers as rootResolvers } from './resolvers';
import { typeDefs } from './schema';
import UserAPI from './datasources/user';
import CourseAPI from './datasources/course';
import store from './db/models/index';

// resolverのcontextからデータにアクセスできるようにUserAPIをここで初期化
const dataSources = () => ({
  userAPI: new UserAPI(store),
  courseAPI: new CourseAPI(store),
});

// こっから初期化
const server = new ApolloServer({
  typeDefs,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resolvers: rootResolvers as any,
  dataSources,
});
const app = Express();

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  // eslint-disable-next-line no-console
  console.log('🚀 Server ready at http://localhost:4000'),
);
