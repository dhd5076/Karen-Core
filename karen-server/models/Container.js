/**
 * @file Container Model
 */

var mongoose = require('mongoose');

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
        type: [{ type: Schema.Types.ObjectId, ref: 'Container'}],
        require: true
    },
    items: {
        type: [{ type: Schema.Types.ObjectId, ref: 'Item'}],
        require: true
    },
    properties: {
        type: Object,
        require: true
    }
});

module.exports = mongoose.model('Container', ContainerSchema);
