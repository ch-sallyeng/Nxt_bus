const express = require('express'),
  router = express.Router();

const apiHelpers = require('../api_helpers');

router.get('/', (req, res) => {
  apiHelpers.getStops(req, res)
    .then(onlyBusesArray => {
      res.sendStatus();
    })
    .catch(err => {
      console.log(`ERROR with return object from getBuses apiHelpers: ${err}`);
    });

});


module.exports = router;
