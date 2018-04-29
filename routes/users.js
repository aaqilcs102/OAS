let express = require("express");
let router = express.Router();

const jwt = require("jsonwebtoken");

const mongooseConfig = require("../config/db.config").mongoose;

let { register, login } = require("../controllers/users");

//Register user API
router.post("/register", register);

//Login API
router.post("/login", login);

module.exports = router;
