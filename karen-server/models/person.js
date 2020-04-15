var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactSchema = new Schema({
    name: {
        first: String,
        last: String
    },
    contact: {
        phone: String,
        email: String
    },
    platforms: {
        discord: String,
        instagram: String,
        twitter: String
    },
    pictures : Array
});

var Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact