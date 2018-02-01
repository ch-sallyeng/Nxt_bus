
var mysql = require('mysql');

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '38ankeny',
  database: 'nextbus'
});

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

module.exports.storeQuery = storeQuery;
