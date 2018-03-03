const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let fundDetailsSchema = new Schema({
    source: {
        type: String
      },
      amountNumber: {
        type: String
      },
      duration: {
        type: String
      }
});

let fundDetails = mongoose.model('fundDetails', fundDetailsSchema);

module.exports = fundDetails;