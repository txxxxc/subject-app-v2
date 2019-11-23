import path from 'path';

const sqlite3 = require('sqlite3').verbose();

const dbPath = path.resolve(__dirname, '../database.db');

export const db = new sqlite3.Database(
  dbPath,
  // ReadとWriteを許可。且つ、databaseが存在しなかった場合は作成
  // eslint-disable-next-line no-bitwise
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
);
