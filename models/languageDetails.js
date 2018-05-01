const mongoonse = require("mongoose");
const Schema = mongoonses.Schema;

let langaugeDetails = (module.exports = mongoonse.model("langaugeDetails", {
  languageName: {
    type: String,
    required: true
  },
  spokenSkill: {
    type: String,
    required: true
  },
  writtenSkill: {
    type: String,
    required: true
  }
}));
