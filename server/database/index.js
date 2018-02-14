
const Promise = require('bluebird');
const mysql = require('mysql');

if (process.env.NODE_ENV === 'production') {
  var db = mysql.createConnection({
    host: 'us-cdbr-iron-east-05.cleardb.net',
    user: 'bc976e0e649d37',
    password: '86095461',
    database: 'heroku_6013fa29b027e6f',
    port: 3306,
  });
  // console.log('+++++inside env if stmt where db is++++++: ', db);
} else {
  var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '38ankeny',
    database: 'nextbus'
  });
}

db.connect();
// db.connect(function(err) {
//   if (err) {
//     console.error(`error connecting:  + ${err.stack}`);
//   }

//   db.query('CREATE DATABASE IF NOT EXISTS nextbus', (err, result) => {
//     if (err) throw err;
//     console.log(`CONNECTED TO SQL as id ${db.threadId}`);
//   })
// });

db = Promise.promisifyAll(db);

storeQuery = (req) => {
  // insert query into database under username //
  const { name, busStop, busStopId, busSelection, direction } = req.query;
  db.query('INSERT IGNORE INTO users (user) VALUES (?)', name, (err, result) => {
    if (err) {
      console.log('Error inside query 1: ', err);
    }

    db.query('SELECT id FROM users WHERE user = ?', name, (err, result) => {
      if (err) {
        console.log('Error inside query 2: ', err);
      }

      let params = [result[0].id, busStop, busStopId, busSelection, direction];
      let queryStr = `
          INSERT INTO queryrecords
          (user_id, busstop, busstopid, busselection, direction)
          VALUES
          (?, ?, ?, ?, ?)
        `;

      db.query(queryStr, params, (err, result) => {
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
      if (err) {
        console.log('Error inside query: ', err);
      }
      return result;
    });
};

module.exports.storeQuery = storeQuery;
module.exports.getQuery = getQuery;
