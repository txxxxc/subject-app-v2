import { createConnection, BaseEntity } from 'typeorm';
import path from 'path';
import { User } from './entity/User';
import { Course } from './entity/Course';

const ensureConnection = async () => {
  const conn = await createConnection({
    type: 'sqlite',
    database: path.resolve(__dirname, '../database.db'),
    entities: [User, Course],
    synchronize: true,
    logging: true,
  });
  await BaseEntity.useConnection(conn);
  await conn.runMigrations();
  const userRepository = await conn.getRepository(User);
  const result = await userRepository.find();
  await console.log({ result });
};

export default async () => {
  ensureConnection();
};
