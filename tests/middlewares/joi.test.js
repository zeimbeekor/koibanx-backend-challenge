const request = require('supertest');
const httpStatus = require('http-status');
const app = require('../../src/app');

// const { Schemas, ValidateJoi } = require('../../src/middlewares/joi');

const userData = {
  username: 'test@koibanx.com',
  password: 'admin',
};

describe('Joi', () => {
  it('invoke a URL that does not exist, this should return the error code http 404 (NOT FOUND)', async () => {
    await app.get('/api/stores2', (req, res) => {
      res.send(req.body);
    });
    const auth = Buffer.from(`${userData.username}:${userData.password}`).toString('base64');
    await request(app)
      .get('/api/stores2')
      .set('Authorization', `Basic ${auth}`)
      .expect(httpStatus.NOT_FOUND);
  });
});
