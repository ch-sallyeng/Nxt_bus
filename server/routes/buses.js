const express = require('express'),
  router = express.Router();

const apiHelpers = require('../api_helpers');

router.get('/', (req, res) => {
  apiHelpers.getBuses(req)
    .then(onlyBusesArray => {
      res.status(200).send(onlyBusesArray);
    })
    .catch(err => {
      console.log(`ERROR with return object from getBuses apiHelpers: ${err}`);
    });

});


module.exports = router;
