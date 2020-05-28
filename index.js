const debug = require('debug')('app:server'); // eslint-disable-line
const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const { config } = require('./config');

// Conexión a db
require('./database'); 
const app = express();

// middlewares
app.use(morgan('dev'));

// Los middleware's deben ir despues de las rutas de api
// ERRORS!
Object.keys(errorHandler).forEach(handler => {
  app.use(errorHandler[handler]);
});

app.listen(config.port, () => {
  debug(chalk.blue(`Aplication running on http://localhost:${config.port}`));
});
