const mongoose = require('mongoose');

const MetricSchema = new mongoose.Schema(
  {
    value: {
      type: Number,
      required: [true, 'Provide metric value'],
    },
    feeRate: {
      type: mongoose.Schema.ObjectId,
      ref: 'FeeRate',
      required: [true, 'Provide fee rate to which that metric belongs to'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

MetricSchema.virtual('name', {
  ref: 'FeeRate',
  foreignField: 'name',
  localField: 'feeRate',
});

MetricSchema.virtual('displayName', {
  ref: 'FeeRate',
  foreignField: 'displayName',
  localField: 'feeRate',
});

const MonthlyMetricsSchema = new mongoose.Schema({
  metrics: [MetricSchema],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  month: {
    type: Date,
  },
});

const MonthlyMetrics = mongoose.model('MonthlyMetrics', MonthlyMetricsSchema);
module.exports = MonthlyMetrics;
