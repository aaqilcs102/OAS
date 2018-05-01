const express = require("express");
const jwt = require("jsonwebtoken");

const mongooseConfig = require("../config/db.config").mongoose;
const { register, login } = require("../controllers/users");

const router = (module.exports = express.Router());

//Register user API
router.post("/register", register);

//Login API
router.post("/login", login);
