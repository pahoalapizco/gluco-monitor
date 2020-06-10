const { Router } = require('express');
const { GlucoseRecordController } = require('../controller');
const { glurecordSchema } = require('../utils/schemas/glurecordSchema');
const validarPeticion = require('../utils/middleware/validationSchema')
const GlucoseRecordRouter = app => {
  const router = Router();

  app.use('/api/glucose', router);

  router.get('/', GlucoseRecordController.getRecords);
  router.post('/', GlucoseRecordController.createRecord);
  router.post('/test', validarPeticion(glurecordSchema), (req, res, next) => {
    res.status(200).json({
      message: 'Bien con la expreción regular! jajaja',
      data: req.body
    });
  });
};

module.exports = GlucoseRecordRouter;