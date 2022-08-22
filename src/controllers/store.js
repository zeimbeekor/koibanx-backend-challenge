const httpStatus = require('http-status');
const { handleHttpError, handleErrorResponse } = require('../utils/handle-error');
const storeService = require('../services/store');
const optionsPaginate = require('../../config/pagination-params');

const create = async (req, res) => {
  try {
    const data = await storeService.create(req.body);
    return res.status(httpStatus.CREATED).json(data);
  } catch (error) {
    return handleHttpError(res, error);
  }
};

const getAll = async (req, res) => {
  try {
    const [, options] = optionsPaginate(req);
    const data = await storeService.getAll(options);
    return res.status(httpStatus.OK).json(data);
  } catch (error) {
    return handleErrorResponse(res, error, httpStatus.NOT_FOUND);
  }
};

module.exports = { create, getAll };
