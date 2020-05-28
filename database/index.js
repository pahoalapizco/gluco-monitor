const debug = require('debug')('app:database'); // eslint-disable-line
const chalk = require('chalk');
const mongoose = require('mongoose');
const { config } = require('../config');

const USER = encodeURIComponent(config.dbUser);
const PASS = encodeURIComponent(config.dbPass);
const DB_NAME = encodeURIComponent(config.dbName);
const DB_URI = `mongodb+srv://${USER}:${PASS}@${config.dbHost}/${DB_NAME}?retryWrites=true&w=majority`;


mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(db => console.log(chalk.green('DB connected!!'))) // eslint-disable-line
  .catch(error => console.log(chalk.red(error)));