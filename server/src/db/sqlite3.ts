const sqlite3 = require('sqlite3').verbose();

let generateDB = new sqlite3.Database(
  './database.db',
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err: Error) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('success');
    }
  },
);
