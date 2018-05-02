const mongoose = require("mongoose");

const student = require("./student");

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
  return student.find({ _id }).then(doc => {
    return new bankDetails(input).save().then(result => {
      doc[0].bankDetailsID.push(result);
      return doc[0].save();
    });
  });
};
