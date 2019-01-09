var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactSchema = new Schema({
    first_name: String,
    last_name: String,
    social: {
        email: Date,
        twitter: String,
        instagram: String,
        facebook: String,
        snapchat: String,
        linkedin: String,
        github: String
    },
    birthday: Date,
    Phone: String
});

var Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact