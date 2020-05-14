var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Property = require('./Item');

var Schema = mongoose.Schema;

var ItemSchema = mongoose.Schema({
    _id: {
        type: Schema.Types.ObjectId,
        auto: true
    },
    type: {
        type: String,
        require: true
    },
    name: {
      type: String,
      require: true  
    },
    properties: {
        type: [Property],
        require: false
    }
});

module.exports = mongoose.model('Item', ItemSchema);
