const debug = require('debug')('app:routes:start');
const { Router } = require('express');
const { StatsController } = require('../controller');

const StatsRouter = (app) => {
  const router = Router();

  app.use('/api/stats', router);

  router.get('/day-level/:year', StatsController.getLevelOgYear);
}

module.exports = StatsRouter;
