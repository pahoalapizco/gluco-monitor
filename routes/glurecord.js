const { Router } = require('express');
const { GlucoseRecordController } = require('../controller');
const { 
  glurecordSchema,
  glurecordTimeSchema
} = require('../utils/schemas/glurecordSchema');
const validarPeticion = require('../utils/middleware/validationSchema')
const GlucoseRecordRouter = app => {
  const router = Router();

  app.use('/api/glucose', router);

  router.get('/', validarPeticion(glurecordTimeSchema, 'query'), GlucoseRecordController.getRecords);
  router.post('/', validarPeticion(glurecordSchema), GlucoseRecordController.createRecord);
};

module.exports = GlucoseRecordRouter;