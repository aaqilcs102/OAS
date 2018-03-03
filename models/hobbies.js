const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let hobbiesSchema = new Schema({
    hobby: [{
        type: String
      }]
});

let hobbies = mongoose.model('hobbies', hobbiesSchema);

module.exports = hobbies;