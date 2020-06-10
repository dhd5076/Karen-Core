/**
 *@file Recipe Model 
 */

var mongoose = require('mongoose');
var Ingredient = require('./Ingredient');
var User = require('./User');

var Schema = mongoose.Schema;

var RecipeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    servings : {
        type: Number,
        default: 1
    },
    ingredients :[{
        ingredient: {
            type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient'
        },
        unit: String,
        value: Number 
    }],
    steps: [String]
});

module.exports = mongoose.model('Recipe', RecipeSchema);
