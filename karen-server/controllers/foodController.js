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
 * @returns {FoodItem[]} The first 25 items matching 
*/
module.exports.search = function(query){
    var promise = new Promise((resolve, reject) => {
        throw new Error("Not Implemented")
    });
}

/**
 * Get Food Item
 * @param {String} id The id of the item to get 
 * @returns {FoodItem} The food item matching the id provided
 */
module.exports.get = function(id) {
    var promise = new Promise((resolve, reject) => {
        throw new Error("Not Implemented")
    });
}

/**
 * Delete Food Item
 * @param {String} id The id of the item to delete
 */
module.exports.delete = function(id) {
    var promise = new Promise((resolve, reject) => {
        throw new Error("Not Implemented")
    });
}

/**
 * Create Food Item
 * @param {Object} foodItemData The information to create the foodItem with
 */
module.exports.create = function(foodItemData) {
    var promise = new Promise((resolve, reject) => {
        throw new Error("Not Implemented")
    });
}

/**
 * Get All Food Items
 * @returns {FoodItem[]} All food items
 */
module.exports.getAll = function() {
    var promsie = new Promise((resolve, reject) => {
        throw new Error("Not Implemented")
    });
}