const mongoose = require('mongoose');
const { handleHttpError } = require('../utils/handle-error');
const Store = require('../models/store');

/**
 * Create a new store
 * @param {*} req
 * @param {*} res
*/
const create = async (req, res) => {
  try {
    const {
      name, cuit, concepts, currentBalance, active, lastSale,
    } = req.body;
    const store = new Store({
      _id: new mongoose.Types.ObjectId(),
      name,
      cuit,
      concepts,
      currentBalance,
      active,
      lastSale,
    });
    return await store
      .save()
      .then((data) => res.status(201).json({ data, message: 'Created' }))
      .catch((error) => handleHttpError(res, error));
  } catch (e) {
    return handleHttpError(res, e);
  }
};

module.exports = { create };
