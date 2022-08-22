const mongoose = require('mongoose');
const User = require('../../src/models/user');
const dotenv = require('dotenv');

dotenv.config();

const config = require('config');

mongoose.Promise = Promise;
mongoose.connect(`mongodb://${config.get('mongodb.address')}/${config.get('mongodb.dbname')}`, { useNewUrlParser: true, useUnifiedTopology: true });

const userData = {
  username: 'hjdsbdjhbaba23235252@gmail.com',
  password: '12345',
};

describe('User model', () => {
  const getByUsername = async (username) => User.findOne({ username });

  it('create & save user successfully', async () => {
    const validUser = new User(userData);
    const savedUser = await validUser.save();

    expect(savedUser._id).toBeDefined();
    expect(savedUser.username).toBe(userData.username);
  });

  it('obtein user successfully', async () => {
    const user = await getByUsername(userData.username);

    expect(user._id).toBeDefined();
    expect(user.username).toBe(userData.username);
  });

  it('delete user successfully', async () => {
    const user = await getByUsername(userData.username);
    const result = await User.deleteOne({ username: user.username });

    expect(result.acknowledged).toEqual(true);
  });

  // It should us tell us the errors in on password field
  it('create user without required field should failed', async () => {
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
