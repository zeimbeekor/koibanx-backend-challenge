const mongoose = require('mongoose');
const logger = require('../src/utils/logger');

exports.dbConnect = (config, callback) => {
  mongoose.Promise = Promise;
  mongoose.connect(`mongodb://${config.get('mongodb.address')}/${config.get('mongodb.dbname')}`, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (!err) {
      if (callback) callback();
    } else {
      logger.error('An error occurred while trying to connect to MongoDB:', err.toString());
      process.exit(1);
    }
  });
};
