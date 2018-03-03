const mongoose = require('mongoose');
const mongooseConfig = require('../config/db.config').mongoose;

let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {
        type: String,
        required: true
    },  
    email: {
        type: String,
        trim: true,
        minlength: 5
    },
    mobileNumber: {
        type: String,
    },
    password: {
        type: String,
        minlength: 5,
        required: true,
        select: false,
    },
    createdAt : { 
        type : Date, 
        default: Date.now 
    },
    updatedAt : { 
        type : Date, 
        default: Date.now 
    }
});

var user = mongoose.model('user', userSchema);

module.exports = {
    user
}