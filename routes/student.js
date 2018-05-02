const express = require("express");

const { verifyJWTToken } = require("../helpers/helpers");

const router = (module.exports = express.Router());

const {
  createStudent,
  updateStudent,
  getStudent
} = require("../controllers/student");

// API end poing for Saving student details
router.post("/profile", createStudent);

//API endpoint to fetch the student with a particular ID
router.get("/profile/:studentDetailsId", getStudent);
