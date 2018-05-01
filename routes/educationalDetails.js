const express = require("express");

const mongooseConfig = require("../config/db.config");
const studentDetails = require("../models/student");
const educationalDetails = require("../models/educationalDetails");
const { addEducationalDetails } = require("../controllers/educationalDetails");

const router = module.exports = express.Router();

//API endpoint to add an individual educationalDetails document against a particular student record
router.post("/educationalDetails/:studentId", addEducationalDetails);

