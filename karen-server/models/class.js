var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var classSchema = new Schema({
    name: String,
    short_name: String,
    start_time: String,
    end_time: String,
    schedule: {
        sunday: Boolean,
        monday: Boolean,
        tuesday: Boolean,
        wednesday: Boolean,
        thursday: Boolean,
        friday: Boolean,
        sunday: Boolean
    },
    location: String
});

var Class = mongoose.model('Class', classSchema);

module.exports = Class