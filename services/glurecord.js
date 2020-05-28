const debug = require('debug')('app:service:glurecord'); // eslint-disable-line
const { GlucoseRecord } = require('../models');

class GlucoseRecordService {
  constructor() {
    this._model = GlucoseRecord;
  }

  async getRecords() {
    const result = await this._model.find();
    return result || [];
  }

  async createRecord({ record }) {
    debug(record)
    const result = await this._model.create(record);
    return result || [];
  }
}

module.exports = GlucoseRecordService;
