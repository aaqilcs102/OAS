const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const researchInterests = module.exports = mongoose.model('researchInterests', {
    researchInterest: [{
        type: String
      }]
});
