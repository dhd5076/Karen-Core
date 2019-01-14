var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var noteSchema = new Schema({
  title: String,
  class: String,
  name: String
});

var Note = mongoose.model('Note', noteSchema);

module.exports = Note