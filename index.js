const debug = require('debug')('app:server'); // eslint-disable-line
const express = require('express');
const chalk = require('chalk');
const { config } = require('./config');

// Conexión a db
require('./database'); 
const app = express();

app.listen(config.port, () => {
  debug(chalk.blue(`Aplication running on http://localhost:${config.port}`));
});
