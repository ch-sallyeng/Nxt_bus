const express = require('express'),
  router = express.Router();

const Promise = require('bluebird');
const apiHelpers = require('../api_helpers');
const db = require('../database/index');

router.get('/', (req, res) => {
  db.storeQuery(req);

  // get predictions based on bus and stopId
  apiHelpers.getPredictions(req)

    .then(predictions => {
      res.status(200).send(predictions);
    })
    .catch(err => {
      console.log(`ERROR with return object from getStops apiHelpers: ${err}`);
    });
});

module.exports = router;
