const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();
const restbus = require('restbus');

const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/restbus', restbus.middleware());


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
app.use('/records', require('./routes/records'));


/******************* END: REQUEST HANDLERS **********************/

const serverPort = process.env.PORT || 3002;
const apiPort = Number(process.env.PORT) + 1 || 3001;

app.listen(serverPort, function() {
  console.log(`app listening on port ${serverPort}!`);
});

restbus.listen(apiPort, function() {
  console.log(`nextbus api listening on port ${apiPort}!`);
});
