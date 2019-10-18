import store from '../../src/db/models/index';

export interface DB {
  User: typeof store.User;
  Course: typeof store.Course;
}
