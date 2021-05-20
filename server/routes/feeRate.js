const express = require('express');
const router = express.Router();

// Import controllers
const {
  addFeeRate,
  getAllRates,
  getAllCurrentRates,
  getRatesByName,
  getCurrentByName,
} = require('../controllers/feeRate');

// @route   POST /fee-rates
// @desc    Create new fee rate
// @access  Private
router.post('/', addFeeRate);

// @route   GET /fee-rates
// @desc    GET all rates in one object
// @access  Public
router.get('/', getAllRates);

// @route   GET /fee-rates
// @desc    GET all current rates in one object
// @access  Public
router.get('/current', getAllCurrentRates);

// @route   GET /fee-rates
// @desc    GET rates with one name
// @access  Public
router.get('/:name', getRatesByName);

// @route   GET /fee-rates
// @desc    GET one current rate by name
// @access  Public
router.get('/:name/current', getCurrentByName);

module.exports = router;
