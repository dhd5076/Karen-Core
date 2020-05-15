/**
 * @file Property Model
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PropertySchema = mongoose.Schema({
    _id: {
        type: Schema.Types.ObjectId,
        auto: true
    },
    name: {
        type: String,
        require: true
    },
    value: {
      type: String,
      require: true  
    },
});

module.exports = mongoose.model('Property', PropertySchema);
