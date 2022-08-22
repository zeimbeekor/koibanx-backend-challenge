/**
 * Handle error
 * @param {*} res
 * @param {*} error
 */
const handleHttpError = (res, error) => {
  res.status(500);
  res.send({ error });
};

/**
 * Handle error specify
 * @param {*} res
 * @param {*} message
 * @param {*} code
 */
const handleErrorResponse = (res, message = 'something happened', code = 401) => {
  res.status(code);
  res.send({ error: message });
};

module.exports = { handleHttpError, handleErrorResponse };
