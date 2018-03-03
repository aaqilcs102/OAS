const mongoonse = require('mongoose');
const Schema = mongoonses.Schema;

let langaugeDetailsSchema = new Schema({
    languageName: {
      type: String
    },
    spokenSkill: {
      type: String
    },
    writtenSkill: {
      type: String
    }
});

let langaugeDetails = mongoonse.model('langaugeDetails', langaugeDetailsSchema);

module.exports = langaugeDetails;