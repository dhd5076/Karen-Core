/**
 * @file The FoodItem Model
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//Defines the FoodItem Schema 
var FoodSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    nutrition: {
        protein: Number,
        fat: Number,
        carbohydrates: Number
    },
    
});

module.exports = mongoose.model('Food', FoodSchema)