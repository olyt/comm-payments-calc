const FeeRate = require('../models/FeeRate');
const feeRatesHelper = require('../helpers/feeRatesHelper');

exports.addFeeRate = (req, res, next) => {
  const newRate = new FeeRate(req.body);

  newRate
    .save()
    .then((data) => res.json(data))
    .catch((err) =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `,
      })
    );
};

exports.getAllRates = (req, res, next) => {
  FeeRate.find()
    .then((data) => {
      const rates = feeRatesHelper.getSortedRates(data);
      res.status(200).json(rates);
    })
    .catch((err) =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `,
      })
    );
};

exports.getAllCurrentRates = (req, res, next) => {
  FeeRate.find()
    .then((data) => {
      const currentRates = feeRatesHelper.getCurrentRates(data);
      res.status(200).json(currentRates);
    })
    .catch((err) => {
      res.status(400).json({
        message: `Error happened on server: "${err}" `,
      });
    });
};

exports.getRatesByName = (req, res, next) => {
  FeeRate.find({ name: req.params.name })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({
        message: `Error happened on server: "${err}" `,
      });
    });
};

exports.getCurrentByName = (req, res, next) => {
  FeeRate.find({ name: req.params.name, current: true })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({
        message: `Error happened on server: "${err}" `,
      });
    });
};
