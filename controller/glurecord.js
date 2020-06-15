const debug = require('debug')('app:controller:glurecord'); // eslint-disable-line
const { GlucoseRecordService } = require('../services');
const responses = require('../utils/responses');

const service = new GlucoseRecordService();
const controller = {};

controller.getRecords = async (req, res, next) => {
  const { day, month } = req.query;
  try {
    const records = await service.getRecords(day, Boolean(month));
    responses.success(res, records);
  } catch(error) {
    next(error);
  }
};
controller.createRecord = async (req, res, next) => {
  const { body: record } = req;
  debug(req.body)
  try {
    const result = await service.createRecord({ record });
    responses.success(res, result, 'Registro realizado correctamente.', 201)
  } catch (error) {
    next(error);
  }
};

module.exports = controller;
