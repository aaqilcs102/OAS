const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let familyDetailsSchema = new Schema({
    fatherOrGaurdianName: {
        type: String,
        required: true
      },
      fatherOrGaurdianPhoneNumber: {
        type: String
      },
      fatherLivingStatus: {
        type: String,
        required: true
      },
      fatherOrGaurdianOcupation: {
        type: String,
        required: true
      },
      monthlyIncome: {
        type: Number,
        required: true
      },
      fatherOrGaurdianMobileNumber: {
        type: Number,
        required: true
      },
      numberOfDependents: {
        type: Number,
        required: true
      }
});

let familyDetails = mongoose.model('familyDetails', familyDetailsSchema);

module.exports = familyDetails;