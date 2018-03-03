const mongoose = require('mongoose');
const mongooseConfig = require('../config/db.config').mongoose;

const Schema = mongoose.Schema;

let educationalDetailsSchema = new Schema({
    degreeName: {
        type: String,
        required: true
    },
    degreeLevel: {
        type: String,
        required: true
    },
    degreeInstitute: {
        type: String,
        required: true
    },
    degreeSubject: {
        type: String,
        required: true
    },
    totalMarks: {
        type: Number,
    },
    obtainedMarks: {
        type: Number,
    },
    totalGPA: {
        type: Number,
    },
    obtainedGPA: {
        type: Number,
    },
    passingYear: {
        type: Date
    },
    rollNumber: {
        type: String,
        required: true
    },
    thesisCheck: {
        type: Boolean
        
    }
});
var educationalDetails = mongoose.model('educationalDetails', educationalDetailsSchema);

module.exports = {
    educationalDetails
}