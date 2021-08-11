const mongoose = require('mongoose');

const FeeRateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: {
      values: [
        'energy',
        'gas',
        'cold-water-in',
        'cold-water-out',
        'hot-water-in',
        'hot-water-out',
        'flat-rent',
      ],
      message: 'Name does not match any standard rates name',
    },
  },
  displayName: {
    type: String,
    required: true,
    enum: {
      values: [
        'Електроенергія',
        'Газ',
        'Підведення холодної води',
        'Відведення холодної води',
        'Підведення гарячої води',
        'Відведення гарячої води',
        'Квартплата',
      ],
      message: 'Display name does not match any standard rates name',
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
