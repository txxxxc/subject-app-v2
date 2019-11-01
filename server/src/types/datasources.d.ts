import UserAPI from '../datasources/user';
import CourseAPI from '../datasources/course';

interface DataSources {
  userAPI: UserAPI;
  courseAPI: CourseAPI;
}

export interface MyContext {
  dataSources: DataSources;
}
