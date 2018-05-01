const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hobbies = (module.exports = mongoose.model("hobbies", {
  hobby: [
    {
      type: String,
      required: true
    }
  ]
}));
