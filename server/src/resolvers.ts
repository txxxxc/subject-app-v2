import { QueryResolvers, Resolvers } from './types/generated';
// User, Course;
const Query: QueryResolvers = {
  async test(_root, _, context) {
    const { dataSources } = await context;
    const result = dataSources.courseAPI.test();

    return result;
  },
  async findUser(_root, _, context) {
    const { dataSources } = await context;
    const result = dataSources.userAPI.findUser();

    return result;
  },
};

// const Search: SearchResolvers = {
//   async searchCoursesByName(_root, args, context) {
//     const { dataSources } = await context;
//     const result: Course = dataSources.courseAPI.searchCoursesByName(args.name)
//   },
// };

export const resolvers: Resolvers = {
  Query,
};
