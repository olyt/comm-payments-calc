const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeeRateSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  rate: {
    regValue: { type: Number },
    twoStep: {
      lowRate: { type: Number },
      highRate: { type: Number },
      changeStep: { type: Number },
    },
    multiLevel: {
      type: [
        {
          subName: String,
          subDisplayName: String,
          rateValue: Number,
        },
      ],
      default: undefined,
    },
  },
  current: {
    type: Boolean,
    required: true,
    default: true,
  },
});

const FeeRate = mongoose.model('feeRate', FeeRateSchema);
module.exports = FeeRate;
