import { createConnection, BaseEntity } from 'typeorm';
import path from 'path';

const ensureConnection = async () => {
  const conn = await createConnection({
    type: 'sqlite',
    database: path.resolve(__dirname, '../database.db'),
    entities: ['server.js'],
    synchronize: false,
    logging: true,
  });
  BaseEntity.useConnection(conn);
};

export default async () => {
  ensureConnection();
};
