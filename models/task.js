var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({
  name: String,
  due: Date
});

var Task = mongoose.model('Task', taskSchema);

module.exports = Task