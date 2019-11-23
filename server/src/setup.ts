import { createConnection, BaseEntity } from 'typeorm';
import path from 'path';
import { User } from './entity/User';
import { Course } from './entity/Course';

const ensureConnection = async () => {
  const conn = await createConnection({
    type: 'sqlite',
    database: path.resolve(__dirname, '../database.db'),
    entities: [User, Course],
    synchronize: false,
    logging: true,
  });
  BaseEntity.useConnection(conn);
};

export default async () => {
  ensureConnection();
};
