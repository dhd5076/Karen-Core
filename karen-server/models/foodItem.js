/**
 * @file The FoodItem Model
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//Defines the FoodItem Schema 
var FoodItemSchema = new Schema({
    fdcId: Number,
    name: {
        type: String,
        required: true
    },
    nutrient: {
        protein: Number,
        fat: Number,
        carbohydrates: Number
    }

});

module.exports = mongoose.model('FoodItem', FoodItemSchema)