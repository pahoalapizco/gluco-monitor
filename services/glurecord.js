const debug = require('debug')('app:service:glurecord'); // eslint-disable-line
const { GlucoseRecord } = require('../models');

class GlucoseRecordService {
  constructor() {
    this._model = GlucoseRecord;
  }

  async getRecords(day, byMonth = false) {
    debug(day);
    let query = {};
    if(day) {
      query = { day };

      if(byMonth) {
        const date = new Date(day);
        const start = new Date(date.getFullYear(), date.getMonth()); // first day 
        const end = new Date(date.getFullYear(), date.getMonth() + 1, 0); // last day

        query = {
          day: {
            $gte: start,
            $lt: end
          }
        };
      }
    }

    const result = await this._model.find(query).sort({ day: -1 });
    return result || [];
  }

  async createRecord({ record }) {
    const result = await this._model.create(record);
    return result || [];
  }

  /**
   * 
   * @param {int} year 
   * @param {boolean} sortBy: true get Higher to lower
   */
  async getLevelOfYear (year, sortBy) {
    const start = new Date(year, 0); // 01/Ene
    const end = new Date(year + 1, 0, 0); // 31/Dic
    const query = {
      day: {
        $gte: start,
        $lt: end
      }
    };

    const records = await GlucoseRecord.find(query);    
    const levelOfYear = records
      .sort((a, b) => sortBy ? b.level - a.level : a.level - b.level)
      .shift();

    return levelOfYear || [];
  }
  
  /**
   * 
   * @param {int} year 
   * @param {int} month 
   * @param {boolean} sortBy true get Higher to lower
   */
  async getLevelPerMonth (year, month, sortBy) {
    const start = new Date(year, month); // first day 
    const end = new Date(year, month + 1, 0); // last day
    const query = {
      day: {
        $gte: start,
        $lt: end
      }
    };
    const records = await GlucoseRecord.find(query);    
    const levelOfMonth = records.sort((a, b) => sortBy ? b.level - a.level : a.level - b.level).shift();
    
    return levelOfMonth || [];
  }
}

module.exports = GlucoseRecordService;
