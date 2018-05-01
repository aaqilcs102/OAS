const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentAddress = module.exports = mongoose.model('studentAddress', {
  addressType: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String
    }
});
