const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

let user = require("../models/users");
let config = require("../config");

let { emailValidator } = require("../helpers/helpers");

const tokenExpiration = 86400;

module.exports = {
  //Handler to handle the the register user route
  register: function(req, res, next) {
    const { name, email, password, userType } = req.body;
    let hashedPassword;

    if (
      typeof password !== "string" ||
      typeof userType !== "string" ||
      !emailValidator(email)
    ) {
      return next({
        json: true,
        status: 422,
        response: false,
        err_code: "INVALID_INPUT",
        message: `email, password and userType are required as string. Password must be 8 character long and have at least one number.`
      });
    }
    hashedPassword = bcrypt.hashSync(password, 8);

    user
      .registerUser(req.body, hashedPassword)
      .then(result => {
        return res.status(200).json({
          response: true,
          message: "User registered successfully.",
          userId: result._id
        });
      })
      .catch(err => {
        if (err.code == 11000 || err.code == 11001) {
          return next({
            json: true,
            status: 500,
            response: false,
            err_code: "DUPLICATE_ENTRY",
            message: `Duplicate email address, please provide another email.`
          });
        }
        return next({
          json: true,
          status: 500,
          response: false,
          err_code: "DB_OPERATION_FAILURE",
          message: `Failed to add new user.`
        });
      });
  },
  login: (req, res, next) => {
    const { email, password, userType } = req.body;
    let token, passwordIsValid;

    if (
      typeof password !== "string" ||
      typeof userType !== "string" ||
      !emailValidator(email)
    ) {
      return next({
        json: true,
        status: 422,
        response: false,
        err_code: "INVALID_INPUT",
        message: `email, password and userType are required as string.`
      });
    }

    user
      .login(req.body)
      .then(result => {
        if (result) {
          passwordIsValid = bcrypt.compareSync(
            password,
            result.password,
            (err, response) => {
              if (err) {
                return next({
                  json: true,
                  status: 500,
                  response: false,
                  err_code: "INTERNAL_SERVER_ERROR",
                  message: err.message
                });
              }
            }
          );

          if (!passwordIsValid) {
            return next({
              json: true,
              status: 401,
              response: false,
              auth: false,
              token: null,
              err_code: "AUTHENTICATION_FAILED",
              message: "Failed to authenticate user."
            });
          }

          token = jwt.sign({ id: user._id }, config.secret, {
            expiresIn: tokenExpiration // expires in 24 hours
          });

          return res.status(200).json({
            response: true,
            message: "User authenticated successfully.",
            userId: result._id,
            token
          });
        } else {
          return next({
            json: true,
            status: 404,
            response: false,
            err_code: "RECORED_NOT_FOUND",
            message: 'User not found with provided email address.'
          });
        }
      })
      .catch(err => {
        return next({
          json: true,
          status: 500,
          response: false,
          err_code: "INTERNAL_SERVER_ERROR",
          message: err.message
        });
      });
  }
};
