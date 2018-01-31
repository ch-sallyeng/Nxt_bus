const express = require('express'),
  router = express.Router();

const Promise = require('bluebird');
const apiHelpers = require('../api_helpers');

router.get('/', (req, res) => {
  apiHelpers.getStops(req)
    .then(stopTitlesAndIDs => {
    // console.log('after apiHelper: ', stopTitlesAndIDs);
      res.status(200).send(stopTitlesAndIDs);
    })
    .catch(err => {
      console.log(`ERROR with return object from getStops apiHelpers: ${err}`);
    });
});

module.exports = router;
