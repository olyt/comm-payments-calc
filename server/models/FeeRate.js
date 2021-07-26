const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeeRateSchema = new Schema({
  name: {
    type: String,
    required: true,
    enum: {
      values: ['energy', 'gas', 'cold-water', 'hot-water', 'flat-rent'],
      message: "Name doesn't match any standard rates name",
    },
  },
  displayName: {
    type: String,
    required: true,
    enum: {
      values: [
        'Електроенергія',
        'Газ',
        'Холодна вода',
        'Гаряча вода',
        'Квартплата',
      ],
      message: "Display name doesn't match any standard rates name",
    },
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  rate: {
    type: Number,
    required: [true, 'Rate must have a value'],
  },
  current: {
    type: Boolean,
    default: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
});

const FeeRate = mongoose.model('FeeRate', FeeRateSchema);
module.exports = FeeRate;
