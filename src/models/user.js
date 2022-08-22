const mongoose = require('mongoose');
const encrypter = require('../utils/pwd-encrypter');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
}, { timestamps: true });

UserSchema.methods.verifyPassword = encrypter.verifyPassword;

UserSchema.pre('save', async function (callback) {
  const user = this;

  // Break out if the password hasn't changed
  if (!user.isModified('password')) return callback();

  try {
    const hash = encrypter.hashPassword(user.password);
    user.password = hash;
    user.status = user.status ? 1 : 0;
    return callback();
  } catch (err) {
    return callback(err);
  }
});

module.exports = mongoose.model('User', UserSchema);
