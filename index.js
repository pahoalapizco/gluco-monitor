const debug = require('debug')('app:server'); // eslint-disable-line
const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const morgan = require('morgan');
const { config } = require('./config');
const rutas = require('./routes');
const errorHandler = require('./utils/middleware/errorHandler');
// Conexión a db
require('./database'); 
const app = express();

// body parser
app.use(bodyParser.json());

// middlewares
app.use(morgan('dev'));

// Implements routes
Object.keys(rutas).forEach(ruta => {
  rutas[ruta](app);
});

// Los middleware's deben ir despues de las rutas de api
// ERRORS!
Object.keys(errorHandler).forEach(handler => {
  app.use(errorHandler[handler]);
});

app.listen(config.port, () => {
  debug(chalk.blue(`Aplication running on http://localhost:${config.port}`));
});
