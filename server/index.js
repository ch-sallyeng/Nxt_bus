const express = require('express');
const path = require('path');
const router = express.Router();
const restbus = require('restbus');

const app = express();

app.use(express.static(__dirname + '/../client/dist'));

router.all('/', (req, res, next) => {
  console.log('Someone made a request!');
  next();
});

router.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/buses', require('./routes/buses'));


/******************* END: REQUEST HANDLERS **********************/

const serverPort = 3000;
const apiPort = 30001;

app.listen(serverPort, function() {
  app.listen(apiPort, function() {
    console.log(`listening on port ${apiPort}!`);
  });
  console.log(`listening on port ${serverPort}!`);
});
