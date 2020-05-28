const debug = require('debug')('app:validationSchema');// eslint-disable-line

function validate(data, schema) {
  const { error } = schema.validate(data);
    
  return error;
}

function validarPeticion(schema, check = 'body') {
  return function(req, res, next) { // eslint-disable-line
    const error = validate(req[check], schema);

    error ? next(new Error(error)) : next();
  };
}
module.exports = validarPeticion;

