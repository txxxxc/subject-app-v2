import { QueryResolvers, Resolvers, User, Course } from './types/generated';

const Query: QueryResolvers = {
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

export const resolvers: Resolvers = {
  Query,
};
