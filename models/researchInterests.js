const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let researchInterestsSchema = new Schema({
    researchInterest: [{
        type: String
      }]
});

let researchInterests = mongoose.model('researchInterests', researchInterestsSchema);

module.exports = researchInterests;