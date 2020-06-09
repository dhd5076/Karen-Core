/**
 * @file Ingredient Controller
 */
var logger = require('../utils/logger');
var Ingredient = require('../models/Ingredient');

/**
 * Create Ingredient
 * @param {String} name Ingredient Name
 * @param {String} unit Ingredient Unit
 * @param {String} calories Ingredient Calories
 * @param {String} protein Ingredient Protein
 * @param {String} fat Ingredient Fat
 * @param {String} carbs Ingredient Carbs
 * @returns {String} The ID Of The Newly Created Ingredient
 */
module.exports.create = function(name, unit, calories, protein, fat, carbs) {
    return new Promise((resolve, reject) => {
        var ingredient = new Ingredient({
            name: name,
            unit: unit,
            calories: calories,
            protein: protein,
            fat: fat,
            carbs: carbs,
        })
        ingredient.save()
        .then(() => {
            resolve(ingredient);
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
        Ingredient.find({})
        .then((ingredients) => {
            resolve(ingredients);
        })
        .catch((error) => {
            reject(error);
        })
    });
}

/**
 * Get ingredient by id
 * @param {String} id Ingredient id
 * @returns {Ingredient} The ingredient with the specified id
 */
module.exports.get = function(id) {
    return new Promise((resolve, reject) => {
        Ingredient.findOne({ _id : id})
        .then((ingredient) => {
            if(ingredient) {
                resolve(ingredient);
            } else {
                reject(new Error(`No ingredient with id ${id}`));
            }
        })
        .catch((error) => {
            reject(error);
        })
    });
}


/**
 * Delete ingredient by id
 * @param {String} id The id of the ingredient to delete
 */
module.exports.delete = function(id) {
    return new Promise((resolve, reject) => {
        Ingredient.deleteOne({ _id: id})
        .then(() => {
            resolve();
        })
        .catch((error) => {
            reject(error);
        });
    });
}