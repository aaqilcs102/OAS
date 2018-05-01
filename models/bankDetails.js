const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('bankDetails', {
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

