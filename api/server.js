const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const routes = require('./routes/routes');

const app = express();
app.use(bodyParser.json());
routes(app);

const PORT = 8080;
const DBURI = 'mongodb://localhost/the';

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
