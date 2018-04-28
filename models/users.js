const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

let user = mongoose.model('user', userSchema);

module.exports = user