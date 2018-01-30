const express = require('express');
const path = require('path');
const router = express.Router();
const restbus = require('restbus');
const axios = require('axios');

const app = express();

app.use(express.static(__dirname + '/../client/build'));

router.all('/', (req, res, next) => {
  console.log('Someone made a request!');
  next();
});

router.get('/', (req, res) => {
  res.send('Hello World');
});

/******************* END: REQUEST HANDLERS **********************/

const serverPort = 3000;

app.listen(serverPort, function() {
  console.log(`listening on port ${serverPort}!`);
});
