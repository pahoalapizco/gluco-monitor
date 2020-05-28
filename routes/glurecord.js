const { Router } = require('express');
const { GlucoseRecordController } = require('../controller');

const GlucoseRecordRouter = app => {
  const router = Router();

  app.use('/api/record', router);

  router.get('/', GlucoseRecordController.getRecords);
  router.post('/', GlucoseRecordController.createRecord);
};

module.exports = GlucoseRecordRouter;