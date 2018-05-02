const model = require("../models/bankDetails");
const mongoose = require("mongoose");

module.exports = {
  addBankDetails: function(req, res, next) {
    const { bankName, bankBranch, accountTitle, accountNumber } = req.body;
    const { studentId } = req.params;

    console.log("1");

    if (
      typeof bankName !== "string" ||
      typeof bankBranch !== "string" ||
      typeof accountTitle !== "string" ||
      typeof accountNumber !== "string" ||
      !mongoose.Types.ObjectId.isValid(studentId)
    ) {
      return next({
        json: true,
        status: 422,
        response: false,
        err_code: "INVALID_INPUT",
        message: `bankName, bankBranch, accountTitle, accountNumber are required as string.`
      });
    }
    model
      .addBankDetails(req.body, studentId)
      .then(result => {
        console.log("4");

        return res.status(200).json({
          response: true,
          message: "User registered successfully.",
          result
        });
      })
      .catch(err => {
        console.log("5");

        return next({
          json: true,
          status: 500,
          response: false,
          err_code: "DB_OPERATION_FAILURE",
          message: `Failed to add bankDetails.`
        });
      });
  }
};
