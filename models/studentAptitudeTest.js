const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentAptitudeTestSchema = new Schema({
    yearTaken: {
      type: Date
    },
    obtainedMarks: {
      type: Number
    },
    testType: {
      type: String
    }
});

let studentAptitudeTest = mongoose.model('studentAptitudeTest', studentAptitudeTestSchema);

module.exports = studentAptitudeTest;