var FoodItem = require('../models/foodItem');
var config = require('../config');
var request = require('request');

module.exports.getFoodItems = function(query) {
    var promise = new Promise((resolve, reject) => {
        resolve();
    });
    return promise();
}