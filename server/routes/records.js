const express = require('express'),
  router = express.Router();

const Promise = require('bluebird');
const db = require('../database/index');

router.get('/', (req, res) => {

  Promise.resolve(db.getQuery(req))
    .then(result => {
      return result.map(record => {
        return {
          busStop: record.busstop,
          busStopId: record.busstopid,
          busSelection: record.busselection,
          direction: record.direction
        }
      })
    })
    .then(resultConvertedFromSQL => {
      res.status(200).send(resultConvertedFromSQL);
    })
    .catch(err => {
      console.log(`ERROR fetching past searches: ${err}`);
    });
});

module.exports = router;
