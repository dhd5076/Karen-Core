/**
 *@file Recipe Model 
 */

var mongoose = require('mongoose');
var Ingredient = require('./Ingredient');
var User = require('./User');

var Schema = mongoose.Schema;

var RecipeSchema = mongoose.Schema({
    id: {
        type: Schema.Types.ObjectId,
        auto: true
    },
    name: String,
    author: String,
    servings : Number,
    ingredients :[{
        ingredient: {
            type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient'
        },
        amount: Number
    }],
    steps: [String]
});

module.exports = mongoose.model('Recipe', RecipeSchema);
