const FeeRate = require('../models/FeeRate');
const catchAsync = require('../utils/catchAsync');
const handlerFactory = require('./handlersFactory');
const AppError = require('../utils/appError');

exports.alwaysToCurrent = catchAsync(async (req, res, next) => {
  if (req.query.resetCurrent === 'true') {
    const oldRate = await FeeRate.findOneAndUpdate(
      { name: req.body.name, displayName: req.body.displayName, current: true },
      { current: false }
    );

    if (!oldRate) {
      return next(new AppError('There is no current rate to update', 404));
    }
  }

  next();
});

exports.addFeeRate = handlerFactory.createOne(FeeRate);
exports.getAllRates = handlerFactory.getAll(FeeRate);
exports.getRate = handlerFactory.getOne(FeeRate);
exports.updateRate = handlerFactory.updateOne(FeeRate);
exports.deleteRate = handlerFactory.deleteOne(FeeRate);
