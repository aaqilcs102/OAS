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
    extraCurricularActivitiesID: [{
        type: Schema.Types.ObjectId,
        ref:  'extraCurricularActivities'
    }
],
    familyDetailsID: {
        type: Schema.Types.ObjectId,
        ref:  'familyDetails'
    },
    fundDetailsID: {
        type: Schema.Types.ObjectId,
        ref:  'fundDetails'
    },
    hobbiesID: {
        type: Schema.Types.ObjectId,
        ref:  'hobbies'
    },
    languageID: [{
        type: Schema.Types.ObjectId,
        ref:  'language'
    }
],    
    researchInterestsID: {
        type: Schema.Types.ObjectId,
        ref:  'researchInterests'
    },
    bankDetailsID: {
        type: Schema.Types.ObjectId,
        ref:  'bankDetails'
    },
    studentAddressID: {
        type: Schema.Types.ObjectId,
        ref:  'studentAddress'
    },
    studentAptitudeTestID: [{
        type: Schema.Types.ObjectId,
        ref:  'studentAptitudeTest'
    }
]
});

let studentDetails = mongoose.model('studentPersonal', studentDetailsSchema);

module.exports = studentDetails