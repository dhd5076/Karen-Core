var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var classSchema = new Schema({
    name: String,
    short_name: String,
    schedule: Object
});

var Class = mongoose.model('Class', classSchema);

module.exports = Class