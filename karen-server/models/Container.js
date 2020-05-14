var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Item = require('./Item');
var Property = require('./Poperty');

var Schema = mongoose.Schema;

var ContainerSchema = mongoose.Schema({
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
    containers: {
        type: [ContainerSchema],
        require: false
    },
    items: {
        type: [Item],
        require: false
    },
    properties: {
        type: [Property],
        require: false
    }
});

module.exports = mongoose.model('Container', ContainerSchema);
