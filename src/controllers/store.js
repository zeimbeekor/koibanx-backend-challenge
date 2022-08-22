const httpStatus = require('http-status');
const { handleHttpError } = require('../utils/handle-error');
const storeService = require('../services/store');

const create = async (req, res) => {
  try {
    const data = await storeService.create(req.body);
    return res.status(httpStatus.CREATED).json(data);
  } catch (error) {
    return handleHttpError(res, error);
  }
};

module.exports = { create };
