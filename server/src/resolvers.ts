import { QueryResolvers } from './types/generated';

export const resolvers: QueryResolvers = {
  async findUser(_root, args, context) {
    const { dataSources } = await context;

    return dataSources.userAPI.findUser();
  },
  async test(_root, args, context) {
    const { dataSources } = await context;

    return dataSources.courseAPI.test();
  },
};
