const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const dotenv = require('dotenv');

dotenv.config();

const config = require('config');
const User = require('../../src/models/user');

require('../../config/mongo').dbConnect(config);

const userData = {
  username: `email_${uuidv4}@gmail.com`,
  password: uuidv4.toString(),
};

describe('User model', () => {
  const getByUsername = async (username) => User.findOne({ username });

  test('create & save user successfully', async () => {
    const validUser = new User(userData);
    const savedUser = await validUser.save();

    expect(savedUser._id).toBeDefined();
    expect(savedUser.username).toBe(userData.username);
  });

  test('obtein user successfully', async () => {
    const user = await getByUsername(userData.username);

    expect(user._id).toBeDefined();
    expect(user.username).toBe(userData.username);
  });

  test('delete user successfully', async () => {
    const user = await getByUsername(userData.username);
    const result = await User.deleteOne({ username: user.username });

    expect(result.acknowledged).toEqual(true);
  });

  // It should us tell us the errors in on password field
  test('create user without required field should failed', async () => {
    const userWithoutRequiredField = new User({ username: 'zeimbeekor' });
    let err;
    try {
      await userWithoutRequiredField.save();
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.password).toBeDefined();
    mongoose.disconnect();
  });
});
