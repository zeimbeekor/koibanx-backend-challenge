const auth = require('basic-auth');
const compare = require('tsscmp');
const httpStatus = require('http-status');

const { handleErrorResponse } = require('../utils/handle-error');
const encrypter = require('../utils/pwd-encrypter');
const User = require('../models/user');

exports.verify = async (req, res, next) => {
  const credentials = auth(req);

  // Basic function to validate credentials
  const check = async (name, pass) => {
    let valid = true;

    const getByUsername = async (username) => User.findOne({ username });

    const user = await getByUsername(name);

    const hashPassword = encrypter.hashPassword(pass);

    // Simple method to prevent short-circut and use timing-safe compare
    valid = compare(name, user.username) && valid;
    valid = compare(hashPassword, user.password) && valid;

    return valid;
  };

  if (!credentials || !check(credentials.name, credentials.pass)) {
    handleErrorResponse(res, 'Access denied', httpStatus.UNAUTHORIZED);
  } else {
    next();
  }
};
