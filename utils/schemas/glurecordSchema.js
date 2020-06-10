const joi = require('@hapi/joi');

const glurecordSchema = joi.object().keys({
  day: joi.date().required(),
  hour: joi.string().min(5).max(5).pattern(new RegExp('^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$')).required(),
  dinner: {
    title: joi.string().required(),
    description: joi.string().required()
  },
  level: joi.number()
});

const glurecordTimeSchema = joi.object().keys({
  day: joi.date(),
  hour: joi.string().min(5).max(5).pattern(new RegExp('^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$'))
});

module.exports = {
  glurecordSchema,
  glurecordTimeSchema
};