/**
 *@file Ingredient Model 
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var IngredientSchema = mongoose.Schema({
    name: String,
    unit: String,
    calories : Number,
    protein : Number,
    fat : Number, 
    carbs : Number
});

module.exports = mongoose.model('Ingredient', IngredientSchema);
