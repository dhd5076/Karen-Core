/**
 * @file The FoodItem Model
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//Defines the FoodItem Schema 
var FoodItemSchema = new Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        auto: true
    },
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

module.exports = mongoose.Model('FoodItem', FoodItemSchema)