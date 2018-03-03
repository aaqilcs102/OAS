const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentDetailsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    cnic: {
        type: String
    }, 
    fatherName: {
        type: String,
        required: true
    },
    applyFor: {
        type: String,
        required: true
    }, 
    district: {
        type: String,
        required: true
    },
    domicile: {
        type: String,
        required: true
    },
    passport: {
        type: String
    },
    mobileNumber: {
        type: String
    },
    email: {
        type: String
    },
    gender: {
        type: String
    },
    DoB: {
        type: Date
    }, 
    image: {
        type: String
    },
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    educationalDetailsID: [{
        type: Schema.Types.ObjectId,
        ref:  'educationalDetails'
    }
],
    extraCurricularActivities: [{
        type: Schema.Types.ObjectId,
        ref:  'extraCurricularActivities'
    }
],
    familyDetails: {
        type: Schema.Types.ObjectId,
        ref:  'familyDetails'
    },
    fundDetails: {
        type: Schema.Types.ObjectId,
        ref:  'fundDetails'
    },
    hobbies: {
        type: Schema.Types.ObjectId,
        ref:  'hobbies'
    },
    language: [{
        type: Schema.Types.ObjectId,
        ref:  'language'
    }
],    
    researchInterests: {
        type: Schema.Types.ObjectId,
        ref:  'researchInterests'
    },
    studentAddress: {
        type: Schema.Types.ObjectId,
        ref:  'studentAddress'
    },
    studentAptitudeTest: [{
        type: Schema.Types.ObjectId,
        ref:  'studentAptitudeTest'
    }
]
});

let studentDetails = mongoose.model('studentPersonal', studentDetailsSchema);

module.exports = studentDetails