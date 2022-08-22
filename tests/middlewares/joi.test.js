const request = require('supertest');

const app = require('../../src/app');

const { Schemas, ValidateJoi } = require('../../src/middlewares/joi');

describe('Joi', () => {
  it('create store without required fields should failed', async () => {
    await app.post('/api/stores', ValidateJoi(Schemas.stock.create), (req, res) => {
      res.send(req.body);
    });
    await request(app)
      .post('/api/stores')
      .send({
        name: 'zeimbeekor', cuit: '', concepts: [], currentBalance: 0, active: true, lastSale: '2018-10-15 14:00:00',
      })
      .expect({ error: 'Access denied' });
  });
});
