const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let fundDetails = (module.exports = mongoose.model("fundDetails", {
  source: {
    type: String,
    required: true
  },
  amountNumber: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  }
}));
