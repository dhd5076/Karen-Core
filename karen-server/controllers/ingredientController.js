/**
 * @file Item Controller
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
        var ingredient = new Item({
            name: name,
            unit: unit,
            calories: calories,
            protein: protein,
            fat: fat,
            carbs: carbs,
        })
        ingredient.save()
        .then(() => {
            resolve(id);
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
        Item.find({})
        .then((items) => {
            resolve(items);
        })
        .catch((error) => {
            reject(error);
        })
    });
}

/**
 * Get item by id
 * @param {String} id Item type
 * @returns {Item} The item with the specified id
 */
module.exports.getByID = function(id) {
    return new Promise((resolve, reject) => {
        Item.findOne({ id : id})
        .then((item) => {
            if(item) {
                resolve(item);
            } else {
                reject(new Error(`No item with id ${id}`));
            }
        })
        .catch((error) => {
            reject(error);
        })
    });
}

/**
 * Get item by name
 * @param {String} name Item name
 * @returns {Item} The items with the specified name
 */
module.exports.getByName = function(name) {
    return new Promise((resolve, reject) => {
        Item.find({ name : name})
        .then((items) => {
            resolve(items);
        })
        .catch((error) => {
            reject(error);
        })
    });
}

/**
 * Get item by type
 * @param {String} type Item type
 * @returns {Item} The items with the specified type
 */
module.exports.getByType = function(type) {
    return new Promise((resolve, reject) => {
        Item.find({ type: type })
        .then((items) => {
            resolve(items);
        })
        .catch((error) => {
            reject(error);
        })
    });
}

/**
 * Set item property
 * @param {String} id Item id to set property of 
 * @param {String} property The property of the item to set
 * @param {String} value The value to set the property to
 */
module.exports.setProperty = function(id, property, value) {
    return new Promise((resolve, reject) => {
        Item.findOne({})
        .then((item) => {
            item.properties[property] = value;
            resolve();
        })
        .catch((error) => {
            reject(error);
        })
    });
}

/**
 * Delete item by id
 * @param {String} id The id of the item to delete
 */
module.exports.delete = function(id) {
    return new Promise((resolve, reject) => {
        Item.deleteOne({ id: id})
        .then(() => {
            resolve();
        })
        .catch((error) => {
            reject(error);
        });
    });
}