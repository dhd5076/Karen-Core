var mongoose = require('mongoose');
var Room = null;
var Schema = mongoose.Schema;

var homeSchema = new Schema({
    name: String,
    rooms: [Room],
    location, location
});

var Home = mongoose.model('Home', homeSchema);

module.exports = Home