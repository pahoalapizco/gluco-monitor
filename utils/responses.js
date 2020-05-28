const debug = require('debug')('app:utils:repsonses'); // eslint-disable-line
exports.success = function(res, datos, mensaje, status) {
  datos = Array.isArray(datos) ? datos : [datos];
  res
    .status(status || 200)
    .send({ error: false, datos: datos || [], mensaje });
};

exports.error = function(res, error, status)  {
  res
    .status(status || 500)
    .send({ error: true, datos: [], mensaje: error || 'Ocurrio un error inesperado, favor intentelo nuevamente.' });
};