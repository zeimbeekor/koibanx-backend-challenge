exports.render = (model) => {
  model.concepts = model.concepts.reduce((data, value, index) => ({ ...data, [`concept${(index + 1)}`]: value }), {});
  model.currentBalance = model.currentBalance.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  model.active = model.active ? 'Si' : 'No';
  model.lastSale = model.lastSale.toUTCString();
  model.id = model._id;
  delete model._id;
  delete model.createdAt;
  delete model.updatedAt;
  return model;
};
