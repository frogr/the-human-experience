const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = 8080;
const DBURI = 'mongodb://localhost/the';
const STATUS_USER_ERR = 422;
const STATUS_SERVER_ERR = 500;
const STATUS_OTHER_ERR = 69;
const STATUS_GOOD = 200;



// << plumbing >>
mongoose.Promise = global.Promise;
const connect = mongoose.connect(DBURI);

connect.then(
  () => {
    app.listen(PORT);
    console.log(`listening! port: ${PORT}`);
  },
  err => {
    throw new Error(`!!E: error! info here: ${err}`)
  }
);
