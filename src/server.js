const dotenv = require('dotenv');

dotenv.config();

const config = require('config');
const logger = require('./utils/logger');

const app = require('./app');

// Only run server if mongoose connects
const RunServer = () => {
  require('./utils/initializer').init();

  // Start the server
  app.listen(config.get('port'));

  logger.info(`API initialized on port ${config.get('port')}`);
  logger.info('Press CTRL-C to stop\n');
};

// MongoDB Init
require('../config/mongo').dbConnect(config, RunServer);
