const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const config = require('config');
const logger = require('./utils/logger');

mongoose.Promise = Promise;
mongoose.connect(`mongodb://${config.get('mongodb.address')}/${config.get('mongodb.dbname')}`, { useNewUrlParser: true, useUnifiedTopology: true });

require('./utils/initializer').init();

app.use('/api', require('./routes/stores'));

// Start the server
app.listen(config.get('port'));
logger.info(`API initialized on port ${config.get('port')}`);

module.exports = app;
