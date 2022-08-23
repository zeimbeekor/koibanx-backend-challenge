const auth = require('basic-auth');
const httpStatus = require('http-status');

const { handleErrorResponse } = require('../utils/handle-error');
const encrypter = require('../utils/pwd-encrypter');
const User = require('../models/user');

exports.verify = async (req, res, next) => {
  const credentials = auth(req);

  // Basic function to validate credentials
  const check = async (name, pass) => {
    const getByUsername = async (username) => User.findOne({ username });
    const user = await getByUsername(name);

    const valid = Boolean(user !== null);

    const verifyPWD = valid ? encrypter.verifyPassword(pass, user.password) : valid;

    return Boolean(user !== null) && verifyPWD;
  };

  const valid = await check(credentials.name, credentials.pass);

  if (!credentials || !valid) {
    handleErrorResponse(res, 'Access denied', httpStatus.UNAUTHORIZED);
  }
  next();
};
