const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dayPeriodValues = {
  values: ['Morning', 'Afternoon', 'Night'],
  message: `{VALUE} isn't valid day period`
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
  dayPeriod: {
    type: String,
    enum: dayPeriodValues,
  },
  dinner: {
    title: { type: String },
    description: { type: String }
  },
  level: {    
    type: Number,
    required: [true, 'Falta registrar nivel de glucosa obtenido en el test.']
  }
}, { timestamps: true });


module.exports = mongoose.model('glucoserecord', glurecord);
