const express = require('express');

const { addBankDetails } = require('../controllers/bankDetails');

const router = module.exports = express.Router();

//API endpoint to add bank details
router.post('/bankDetails/:studentId', addBankDetails);
