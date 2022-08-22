const mongoose = require('mongoose');
const Store = require('../models/store');

exports.create = async (args) => {
  const {
    name, cuit, concepts, currentBalance, active, lastSale,
  } = args;
  const store = new Store({
    _id: new mongoose.Types.ObjectId(), name, cuit, concepts, currentBalance, active, lastSale,
  });
  const data = await store.save()
    .then((d) => ({ data: d, message: 'Created' }));
  return data;
};
