const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bankDetailsSchema = new Schema({
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
});


let bankDetails = mongoose.model('bankDetails', bankDetailsSchema);

module.exports = bankDetails;