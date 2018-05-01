const model = require("../models/bankDetails");

module.exports = {
  addBankDetails: function(req, res) {
    const { bankName, bankBranch, accountTitle, accountNumber } = req.body;
    const { studentId } = req.params;

    if (
      bankName !== "string" ||
      bankBranch !== "string" ||
      accountTitle !== "string" ||
      accountNumber !== "string"
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
        return res.status(200).json({
          response: true,
          message: "User registered successfully.",
          result
        });
      })
      .catch(err => {
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
