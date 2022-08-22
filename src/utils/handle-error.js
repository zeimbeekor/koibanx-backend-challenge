const httpStatus = require('http-status');

/**
 * Handle error
 * @param {*} res
 * @param {*} error
 */
const handleHttpError = (res, error) => {
  res.status(httpStatus.INTERNAL_SERVER_ERROR);
  res.send({ error });
};

/**
 * Handle error specify
 * @param {*} res
 * @param {*} message
 * @param {*} code
 */
const handleErrorResponse = (res, message = 'something happened', code = httpStatus.UNAUTHORIZED) => {
  res.status(code);
  res.send({ error: message });
};

module.exports = { handleHttpError, handleErrorResponse };
