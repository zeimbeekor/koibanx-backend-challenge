const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const config = require('config');
const Store = require('../../src/models/store');

require('../../config/mongo').dbConnect(config);

const storeData = {
  name: 'zeimbeekor_model2600_xxxxxxxxxxxZB',
  cuit: '21141252525',
  concepts: ['concept1', 'concept2', 'concept3', 'concept4', 'concept5'],
  currentBalance: 12345,
  active: true,
  lastSale: new Date(),
};

describe('Store model', () => {
  const getByStoreName = async (name) => Store.findOne({ name });

  it('create & save store successfully', async () => {
    const validStore = new Store(storeData);
    const savedStore = await validStore.save();

    expect(savedStore._id).toBeDefined();
    expect(savedStore.name).toBe(storeData.name);
    expect(savedStore.cuit).toBe(storeData.cuit);
    expect(savedStore.concepts).toEqual(storeData.concepts);
    expect(savedStore.currentBalance).toEqual(storeData.currentBalance);
    expect(savedStore.active).toEqual(storeData.active);
    expect(savedStore.lastSale).toEqual(storeData.lastSale);
  });

  it('obtein store successfully', async () => {
    const store = await getByStoreName(storeData.name);

    expect(store._id).toBeDefined();
    expect(store.name).toBe(storeData.name);
    expect(store.cuit).toBe(storeData.cuit);
    expect(store.concepts).toEqual(storeData.concepts);
    expect(store.currentBalance).toEqual(storeData.currentBalance);
    expect(store.active).toEqual(storeData.active);
    expect(store.lastSale).toEqual(storeData.lastSale);
  });

  it('delete store successfully', async () => {
    const store = await getByStoreName(storeData.name);
    const result = await Store.deleteOne({ name: store.name });

    expect(result.acknowledged).toEqual(true);
    mongoose.disconnect();
  });
});
