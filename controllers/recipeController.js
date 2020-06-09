/**
 * @file Recipe Controller
 */
var logger = require('../utils/logger');
var Recipe = require('../models/Recipe');

/**
 * Create Recipe
 * @param {String} name Recipe Name
 * @param {String} unit Recipe Unit
 * @param {String} calories Recipe Calories
 * @param {String} protein Recipe Protein
 * @param {String} fat Recipe Fat
 * @param {String} carbs Recipe Carbs
 * @returns {String} The ID Of The Newly Created Recipe
 */
module.exports.create = function(name, author) {
    return new Promise((resolve, reject) => {
        var recipe = new Recipe({
            name: name,
            author: author,
            servings: -1,
            ingredients: [],
            steps: []
        })
        recipe.save()
        .then(() => {
            resolve(recipe);
        })
        .catch((error) => {
            reject(error);
        })
    });
}


/**
 * Get all items
 * @returns {[String]} All items
 */
module.exports.getAll = function() {
    return new Promise((resolve, reject) => {
        Recipe.find({})
        .then((recipes) => {
            resolve(recipes);
        })
        .catch((error) => {
            reject(error);
        })
    });
}

/**
 * Get recipe by id
 * @param {String} id Recipe id
 * @returns {Recipe} The recipe with the specified id
 */
module.exports.get = function(id) {
    return new Promise((resolve, reject) => {
        Recipe.findOne({ _id : id})
        .then((recipe) => {
            if(recipe) {
                resolve(recipe);
            } else {
                reject(new Error(`No recipe with id ${id}`));
            }
        })
        .catch((error) => {
            reject(error);
        })
    });
}


/**
 * Delete recipe by id
 * @param {String} id The id of the recipe to delete
 */
module.exports.delete = function(id) {
    return new Promise((resolve, reject) => {
        Recipe.deleteOne({ _id: id})
        .then(() => {
            resolve();
        })
        .catch((error) => {
            reject(error);
        });
    });
}