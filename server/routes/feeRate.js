const express = require('express');
const router = express.Router();

// Import controllers
const feeRatesController = require('../controllers/feeRate');

router
  .route('/')
  .get(feeRatesController.getAllRates)
  .post(feeRatesController.alwaysToCurrent, feeRatesController.addFeeRate);

router
  .route('/:id')
  .get(feeRatesController.getRate)
  .patch(feeRatesController.updateRate)
  .delete(feeRatesController.deleteRate);

module.exports = router;
