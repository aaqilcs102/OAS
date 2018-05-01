const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let bankDetails = (module.exports = mongoose.model("bankDetails", {
  bankName: {
    type: String,
    required: true
  },
  bankBranch: {
    type: String,
    required: true
  },
  accountTitle: {
    type: String,
    required: true
  },
  accountNumber: {
    type: String,
    required: true
  }
}));

bankDetails.addBankDetails = (input, _id) => {
  find({ _id }).then(doc => {
    new bankDetails(input).save().then(result => {
      doc[0].bankDetailsID = result;
      doc[0].save();
    });
  });
};
