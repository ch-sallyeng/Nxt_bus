const express = require('express'),
  router = express.Router();

const Promise = require('bluebird');
const db = require('../database/index');

router.get('/', (req, res) => {

  Promise.resolve(db.getQuery(req))
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      console.log(`ERROR fetching past searches: ${err}`);
    });
});

module.exports = router;
