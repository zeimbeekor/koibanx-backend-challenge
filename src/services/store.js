const mongoose = require('mongoose');
const Store = require('../models/store');
const storeModelToDTO = require('../utils/store-model-to-dto');

const dto = (stores) => stores.map((store) => storeModelToDTO.render(store._doc));

exports.create = async (args) => {
  const {
    name, cuit, concepts, currentBalance, active, lastSale,
  } = args;
  const store = new Store({
    _id: new mongoose.Types.ObjectId(), name, cuit, concepts, currentBalance, active, lastSale,
  });
  const data = await store.save()
    .then((d) => ({ data: d, message: 'Created' }));
  data.data = dto([data.data]);
  return data;
};

exports.getAll = async (options) => {
  const data = await Store.paginate({}, options);
  data.docs = dto(data.docs);
  return { data };
};
