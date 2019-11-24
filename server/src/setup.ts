import { createConnection, BaseEntity } from 'typeorm';
import path from 'path';
import { User } from './entity/User';
import { Course } from './entity/Course';

const ensureConnection = async () => {
  const conn = await createConnection({
    type: 'sqlite',
    database: path.resolve('database.db'),
    entities: [User, Course],
    synchronize: true,
    logging: true,
  });
  await BaseEntity.useConnection(conn);
  await conn.runMigrations();
};

export default async () => {
  await ensureConnection();
};
