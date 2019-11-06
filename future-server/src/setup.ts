import { createConnection, BaseEntity } from 'typeorm';
import { root } from './paths';

const ensureConnection = async () => {
  const conn = await createConnection({
    type: 'sqlite',
    database: `${root}/database.db`,
    entities: ['src/entity/*.ts'],
    synchronize: false,
    logging: true,
  });
  BaseEntity.useConnection(conn);
};

export default async () => {
  ensureConnection();
};
