const mongoose = require('mongoose');
const mongooseConfig = require('../config/db.config').mongoose;

let Schema = mongoose.Schema;

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
    ]
});

var studentDetails = mongoose.model('studentPersonal', studentDetailsSchema);

module.exports = {
    studentDetails
}