import { Sequelize } from 'sequelize';
import User from './user';
import Course from './course';
// 設定をconfig.jsonからimport
const { database, username, password, storage, dialect } = require('./config');

// Sequelizeの初期化
const sequelize = new Sequelize(database, username, password, {
  // sqlを使うときはstorageが必要
  storage,
  // どのデータベースを使うか
  dialect,
});

// テーブルの初期化
const store = {
  User: User.initialize(sequelize),
  Course: Course.initialize(sequelize),
};

export default store;
