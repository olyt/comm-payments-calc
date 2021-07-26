const FeeRate = require('../models/FeeRate');
const handlerFactory = require('./handlersFactory');

exports.addFeeRate = handlerFactory.createOne(FeeRate);
exports.getAllRates = handlerFactory.getAll(FeeRate);
exports.getRate = handlerFactory.getOne(FeeRate);
exports.updateRate = handlerFactory.updateOne(FeeRate);
exports.deleteRate = handlerFactory.deleteOne(FeeRate);
