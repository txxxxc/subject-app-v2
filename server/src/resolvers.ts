export const resolvers = {
  Query: {
    findUser: (_: string, __: string, { dataSources }: { dataSources: any }) =>
      dataSources.userAPI.findUser(),
    test: (_: string, __: string, { dataSources }: { dataSources: any }) =>
      dataSources.courseAPI.test(),
  },
};
