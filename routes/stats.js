const debug = require('debug')('app:routes:start');
const { Router } = require('express');
const { StatsController } = require('../controller');

const StatsRouter = (app) => {
  const router = Router();

  app.use('/api/stats', router);

  router.get('/day-level/:year', StatsController.getLevelOfYear);
  router.get('/day-level/:year/:month', StatsController.getLevelPerMonth);
}

module.exports = StatsRouter;
