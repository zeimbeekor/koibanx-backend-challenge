const express = require('express');
const logger = require('../utils/logger');

const router = express.Router();

router.route('/stores')
  .get(() => { logger.info('pending validations'); }, () => { logger.info('pending use case'); });

module.exports = router;
