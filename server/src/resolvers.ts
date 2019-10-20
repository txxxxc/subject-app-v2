export const resolvers = {
  Query: {
    findUser: (_: any, __: any, { dataSources }: { dataSources: any }) =>
      dataSources.userAPI.findUser(),
    test: (_: any, __: any, { dataSources }: { dataSources: any }) =>
      dataSources.courseAPI.test(),
  },
};
