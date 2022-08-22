const express = require('express');
const controller = require('../controllers/store');
const basicAuth = require('../middlewares/basic-auth');
const { Schemas, ValidateJoi } = require('../middlewares/joi');

const router = express.Router();

router.route('/stores').post(basicAuth.verify, ValidateJoi(Schemas.stock.create), controller.create);
router.route('/stores').get(basicAuth.verify, controller.getAll);

module.exports = router;
