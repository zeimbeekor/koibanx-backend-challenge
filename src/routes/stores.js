const express = require('express');
const controller = require('../controllers/store');
const basicAuth = require('../middlewares/basic-auth');
const { Schemas, ValidateJoi } = require('../middlewares/joi');

const router = express.Router();

router.route('/stores').post(basicAuth.verify, ValidateJoi(Schemas.stock.create), controller.create);

module.exports = router;
