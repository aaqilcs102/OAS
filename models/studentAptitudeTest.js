const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentAptitudeTest = module.exports = mongoose.model('studentAptitudeTest', {
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
