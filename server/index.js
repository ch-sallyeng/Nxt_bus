const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();
const restbus = require('restbus');

const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


router.all('/', (req, res, next) => {
  console.log('Someone made a request!');
  next();
});

router.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/buses', require('./routes/buses'));
app.use('/stops', require('./routes/stops'));
app.use('/predictions', require('./routes/predictions'));


/******************* END: REQUEST HANDLERS **********************/

const serverPort = 3000;
const apiPort = 3001;

app.listen(serverPort, function() {
  restbus.listen(apiPort, function() {
    console.log(`listening on port ${apiPort}!`);
  });
  console.log(`listening on port ${serverPort}!`);
});
