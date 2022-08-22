const moment = require('moment');
const Joi = require('joi');
const httpStatus = require('http-status');
const { handleErrorResponse } = require('../utils/handle-error');
const logger = require('../utils/logger');

const ValidateJoi = (schemas) => async (req, res, next) => {
  try {
    await schemas.validateAsync(req.body);

    return next();
  } catch (error) {
    logger.error(error);

    return handleErrorResponse(res, error, httpStatus.UNPROCESSABLE_ENTITY);
  }
};

const Schemas = {
  stock: {
    create: Joi.object({
      name: Joi.string().required(),
      cuit: Joi.string().required(),
      concepts: Joi.array().required(),
      currentBalance: Joi.number().required(),
      active: Joi.boolean().required(),
      lastSale: Joi.date().default(() => moment().format('yyyy-MM-dd HH:mm:ss')).required(),
    }),
  },
};

module.exports = { Schemas, ValidateJoi };
