var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({
  name: String,
  class: String,
  due: Date,
  completed: Boolean
});

var Task = mongoose.model('Task', taskSchema);

module.exports = Task