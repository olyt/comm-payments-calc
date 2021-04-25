const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegFeeRateSchema = new Schema({
  name: {
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
      default: null,
    },
    multiLevel: {
      subName: { type: String },
      value: { type: Number },
      default: null,
    },
  },
  current: {
    type: Boolean,
    required: true,
    default: true,
  },
  twoLevelRate: {
    type: Boolean,
    default: false,
  },
});

const RegFeeRate = mongoose.model('regFeeRate', RegFeeRateSchema);
module.exports = RegFeeRate;
