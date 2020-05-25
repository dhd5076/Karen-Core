/**
 *@file Ingredient Model 
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var IngredientSchema = mongoose.Schema({
    id: {
        type: Schema.Types.ObjectId,
        auto: true
    },
    name: String,
    unit: String,
    calories : Number,
    protein : Number,
    fat : Number, 
    carbs : Number
});

module.exports = mongoose.model('Ingredient', IngredientSchema);
