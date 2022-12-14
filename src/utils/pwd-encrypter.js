const bcrypt = require('bcrypt-nodejs');

exports.hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const encriptedPassword = bcrypt.hashSync(password, salt);
  return encriptedPassword;
};

exports.verifyPassword = (password, hash) => bcrypt.compareSync(password, hash);
