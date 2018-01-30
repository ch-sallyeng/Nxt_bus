const express = require('express'),
  router = express.Router();

router.get('/', (req, res) => {
  res.send('whats good');
});


module.exports = router;
