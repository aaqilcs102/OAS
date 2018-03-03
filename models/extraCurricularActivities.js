const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let extraCarricularActivitiesSchema = new Schema('extraCarricularActivities', {
    "activity": {
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
});

let extraCarricularActivities = mongoose.model('extraCarricularActivities', extraCarricularActivitiesSchema);

module.exports = extraCarricularActivities;