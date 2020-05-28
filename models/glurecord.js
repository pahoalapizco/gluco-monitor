const mongoose = require('mongoose');
const {
  DS_AYUNAS,
  DS_ANTES_COMER,
  DS_ANTER_COMER,
  DS_DESPUES_COMER,
  DS_DESPUES_CENAR
} = require('../utils/globals');

const Schema = mongoose.Schema;

const dinnerStatusEnum = {
  values: [DS_AYUNAS, DS_ANTES_COMER, DS_ANTER_COMER, DS_DESPUES_COMER, DS_DESPUES_CENAR],
  message: '{VALUE} no es un role válido.'
};

const glurecord = new Schema({
  day: {
    type: Date,
    required: [true, 'Falta registrar la fecha en que se realizó el test.']
  },
  hour: {
    type: String,
    required: [true, 'Falta registrar la hora en que se realizó el test.']
  },
  dinnerStatus: {
    type: String,
    enum: dinnerStatusEnum
  },
  level: {    
    type: Number,
    required: [true, 'Falta registrar nivel de glucosa obtenido en el test.']
  }
}, { timestamps: true });


module.exports = mongoose.model('glucoserecord', glurecord);
