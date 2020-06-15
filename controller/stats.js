const debug = require('debug')('app:controller:stats'); // eslint-disable-line
const { GlucoseRecordService } = require('../services/');
const responses = require('../utils/responses');

const services = new GlucoseRecordService();
const controller = {};

controller.getLevelOgYear = async (req, res, next) => {
  const { sort } = req.query;
  const { year } = req.params;
  
  let higher = true; 
  try {
    if (sort) higher = sort.toLowerCase() === 'higher';

    const result = await services.getLevelOfYear(parseInt(year), higher);
    responses.success(res, result);
  } catch (error) {
    next(error);
  }
};

module.exports = controller;
