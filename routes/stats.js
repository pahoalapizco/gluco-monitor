const debug = require('debug')('app:routes:start');
const { Router } = require('express');
const { StatsController } = require('../controller');
const { statsSchema } = require('../utils/schemas/statsSchema');
const validationSchema = require('../utils/middleware/validationSchema');
const StatsRouter = (app) => {
  const router = Router();

  app.use('/api/stats', router);
  router.get('/day-level/:year', 
    validationSchema(statsSchema, 'query'),
    validationSchema(statsSchema, 'params'),    
    StatsController.getLevelOfYear);
    
  router.get('/day-level/:year/:month', 
    validationSchema(statsSchema, 'query'),
    validationSchema(statsSchema, 'params'),    
    StatsController.getLevelPerMonth);
}

module.exports = StatsRouter;
