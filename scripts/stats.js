const chalk = require('chalk');
const { GlucoseRecord } = require('../models');

require('../database');

const getMaxLevelOfTheYear = async (year, higher = true) => {
  const start = new Date(year, 0, 1); // 01/Ene
  const end = new Date(year+1, 0, 0); // 31/Dic
  console.log('start: ', start)
  console.log('end: ', end)
  const query = {
    day: {
      $gte: start,
      $lt: end
    }
  };
  try {
    const records = await GlucoseRecord.find(query).sort({ day: -1 });    
    const maxLevel = records.sort((a, b) => higher ? b.level - a.level : a.level - b.level).shift();

    console.log(maxLevel);
    process.exit(0);
  } catch(error) {
    console.error(chalk.red(error));
    process.exit(1);
  }
}

getMaxLevelOfTheYear(2020, false);

const getLevelPerMonth = async (year, month, higher = true) => {
  const start = new Date(year, month); // 01/Ene
  const end = new Date(year, month + 1, 0); // 31/May
}
