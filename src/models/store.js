const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const StoreSchema = new mongoose.Schema({
  name: String,
  cuit: String,
  concepts: Array,
  currentBalance: Number,
  active: Boolean,
  lastSale: Date,
}, { versionKey: false, timestamps: true });

StoreSchema.plugin(mongoosePaginate);

StoreSchema.pre('save', async () => {
  // completar de ser necesario
});

module.exports = mongoose.model('Store', StoreSchema);
