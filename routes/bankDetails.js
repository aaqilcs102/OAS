const express = require('express');

const mongooseConfig = require('../config/db.config');
const studentDetails = require('../models/student');
const bankDetails = require('../models/bankDetails');
const bankDetails = require('../models/bankDetails');
const { addBankDetails } = require('../controllers/bankDetails');

const router = module.exports = express.Router();

//API endpoint to add bank details
router.post('/bankDetails/:studentId', addBankDetails);
