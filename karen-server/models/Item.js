/**
 *@file Item Model 
 */

var mongoose = require('mongoose');
var Property = require('./Item');

var Schema = mongoose.Schema;

var ItemSchema = mongoose.Schema({
    id: {
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
        type: Object,
        require: false
    }
});

module.exports = mongoose.model('Item', ItemSchema);
