const joi = require('@hapi/joi');

const statsSchema = joi.object().keys({
  year: joi.number(),
  month: joi.number(),
  sort: joi.string()
});

module.exports = { statsSchema }