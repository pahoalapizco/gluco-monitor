const debug = require('debug')('seeders:glucorecord');
const chalk = require('chalk');
const { GlucoseRecordService } = require('../services/');

require('../database/');

const getRandom = (max, min = 1) => Math.floor(Math.random() * (max - min) + min);
const getString = data => data < 10 ? '0'+ data : data.toString();

const getRandomDateAndHour = () => {
  const actualDay = new Date();
  // Data for day
  const randomDay = getRandom(30);
  const randomMonth = getRandom(actualDay.getMonth() + 1);
  
  const randomDate = [
    actualDay.getFullYear().toString(), 
    getString(randomMonth),
    getString(randomDay)
  ] 
  // Data for Time
  const randomHour = getRandom(23, 0);
  const randomMinute = getRandom(59, 0);
  
  const randomTime = [
    getString(randomHour),
    getString(randomMinute)
  ]

  return { randomDate, randomTime }
};

const getDayPeriod = hour => {
  hour = parseInt(hour);
  if(hour >= 12 && hour < 20) {
    return 'Afternoon';
  } else if ((hour >= 20 && hour >= 24) || (hour >= 1 && hour < 4)) {
    return 'Night';
  } else {
    return 'Morning';
  }
};

const getRandomData = max => {
  let data = [];

  for(let i=0; i < max; i++) {
    const dayAndTime = getRandomDateAndHour();
    data.push({
      day: `${dayAndTime.randomDate[0]}-${dayAndTime.randomDate[1]}-${dayAndTime.randomDate[2]}`,
      hour: `${dayAndTime.randomTime[0]}:${dayAndTime.randomTime[1]}`,
      dayPeriod: getDayPeriod(dayAndTime.randomTime[0]),
      level: getRandom(300, 50)
    });
  }

  return data;
};

const glucoSeeder = async (totalSeed) => {
  const GlucoseRecord = new GlucoseRecordService();
  const data = getRandomData(totalSeed);

  if (!totalSeed) {
    console.log(chalk.yellow('Favor de agregar un numero total de seeds!'));
    process.exit(1);
    return;
  }

  try {
    let cont = 1;
    const promises = data.map(async record => {
      console.log('cont: ', cont);
      const glucoRecord = await GlucoseRecord.createRecord({ record });
      console.log(chalk.green('Record created:', glucoRecord));
      cont++;
    });

    await Promise.all(promises);
    return process.exit(0);
  } catch(error) {
    console.log(chalk.red(error));
    process.exit(1);
  }
};

glucoSeeder(10);
