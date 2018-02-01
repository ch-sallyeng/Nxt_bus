
const Promise = require('bluebird');
const mysql = require('mysql');

let db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '38ankeny',
  database: 'nextbus'
});

db = Promise.promisifyAll(db);

db.connect(function(err) {
  if (err) {
    console.error(`error connecting:  + ${err.stack}`);
    return;
  }

  console.log(`CONNECTED TO SQL as id ${db.threadId}`);
});

storeQuery = (req) => {
  // insert query into database under username //
  const { name, busSelection, busStop, direction } = req.query;
  db.query('INSERT IGNORE INTO users (user) VALUES (?)', name, (err, result) => {
    if (err) {
      console.log('Error inside query 1: ', err);
    }

    db.query('SELECT id FROM users WHERE user = ?', name, (err, result) => {
      if (err) {
        console.log('Error inside query 2: ', err);
      }

      let params = [result[0].id, busSelection, busStop, direction];
      let queryStr = `
          INSERT INTO queryrecords
          (user_id, busselection, busstop, direction)
          VALUES
          (?, ?, ?, ?)
        `;

      db.query(queryStr, params, (err, result) => {
        console.log('inserting into query records: ', result);
        if (err) {
          console.log('Error inside query 3: ', err);
        }
      });
    });
  });
};

getQuery = (req) => {
  const { name } = req.query;

  const queryStr = 'SELECT * FROM queryrecords WHERE user_id = (SELECT id FROM users WHERE user = ?)';

  return db.queryAsync(queryStr, name)
    .then((result, err) => {
      console.log('DB: this is the result: ', result);
      if (err) {
        console.log('Error inside query: ', err);
      }
      return result;
    });
};

module.exports.storeQuery = storeQuery;
module.exports.getQuery = getQuery;
