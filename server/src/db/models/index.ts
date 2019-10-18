import { Sequelize } from 'sequelize';
import User from './user';
import Course from './course';

const { database, username, password, storage, dialect } = require('./config');

const sequelize = new Sequelize(database, username, password, {
  storage,
  dialect,
});

const store = {
  User: User.initialize(sequelize),
  Course: Course.initialize(sequelize),
};

export default store;
