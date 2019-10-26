import { QueryResolvers, User, Course } from './types/generated';

export const resolvers: QueryResolvers = {
  async test(_root, args, context) {
    const { dataSources } = await context;

    const result: Course = dataSources.courseAPI.test();

    return result;
  },
  async findUser(_root, args, context) {
    const { dataSources } = await context;
    const result: User = dataSources.userAPI.findUser();

    return result;
  },
};
