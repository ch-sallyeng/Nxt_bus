const express = require('express'),
  router = express.Router();

const Promise = require('bluebird');
const apiHelpers = require('../api_helpers');

router.get('/', (req, res) => {
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
