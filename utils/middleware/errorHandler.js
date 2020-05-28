const debug = require('debug')('app:error');// eslint-disable-line
const boom = require('@hapi/boom');
const { config } = require('../../config');
const response = require('../responses');

function withErrorStack(err, stack) {// eslint-disable-line
  if (config.dev) {
    return { message: err, stack };
  }

  return err;
}

function logError(err, req, res, next) {// eslint-disable-line
  debug(err);
  next(err);
}

function wrapError(err, req, res, next) {// eslint-disable-line
  if (!err.isBoom) {
    next(boom.boomify(err, {}));
  }
}

function errorHandler(err, req, res, next) { // eslint-disable-line
  response.error(res, withErrorStack(err.message, err.stack), 500);
}

function notFoundHandler(req, res) { // eslint-disable-line
  const {
    output: { statusCode, payload }
  } = boom.notFound();

  response.error(res, payload, statusCode);
}

module.exports = {
  notFoundHandler,
  wrapError,
  logError,
  errorHandler
};

