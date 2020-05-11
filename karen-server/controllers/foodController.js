/**
 * Provides Utilities For Handling Food Items
 */

var Food = require('../models/food');
var logger = require('../utils/logger');
var config = require('../config');
var request = require('request');

/**
 * Gets FoodItems by name query
 * @param {String} query The Search Query
 * @returns {Food[]} The first 25 items matching 
*/
module.exports.search = function(query){
    return promise = new Promise((resolve, reject) => {
        reject(new Error("Not Implemented"));
    });
}

/**
 * Get Food Item
 * @param {String} id The id of the item to get 
 * @returns {Foodå} The food item matching the id provided
 */
module.exports.get = function(id) {
    var promise = new Promise((resolve, reject) => {
        reject(new Error("Not Implemented"));
    });
}

/**
 * Delete Food Item
 * @param {String} id The id of the item to delete
 */
module.exports.delete = function(id) {
    return promise = new Promise((resolve, reject) => {
        reject(new Error("Not Implemented"));
    });
}

/**
 * Create Food Item
 * @param {Object} foodItemData The information to create the food with
 */
module.exports.create = function(foodItemData) {
    return promise = new Promise((resolve, reject) => {
        reject(new Error("Not Implemented"));
    });
}

/**
 * Get All Food Items
 * @returns {Food[]} All food items
 */
module.exports.getAll = function() {
    return promise = new Promise((resolve, reject) => {
        reject(new Error("Not Implemented"))
    });
}