const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let extraCarricularActivities = (module.exports = mongoose.model(
  "extraCarricularActivities",
  {
    activity: {
      type: String,
      require: true
    },
    prize: {
      type: String,
      require: true
    },
    awardedBy: {
      type: String,
      require: true
    }
  }
));
