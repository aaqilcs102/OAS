const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentAddressSchema = new Schema({
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

let studentAddress = mongoose.model('studentAddress', studentAddressSchema);

module.exports = studentAddress;