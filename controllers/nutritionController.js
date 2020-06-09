/**
 * @file Nutrition Controller
 */
var logger = require('../utils/logger');
var Recipe = require('../models/Recipe');
var NutritionixClient = require('nutritionix');
var nutritionix = new NutritionixClient({
    appId: 'ff6cec92',
    appKey: '7e3221e20642cd98c795cf0f6771cbbd'
});

/**
 * @param {String} query Query string
 * @returns {Promise.<[Object]>} Search results
 */
module.exports.search = function(query) {
    return new Promise((resolve, reject) => {
        nutritionix.search({
            q: query,
            limit: 10,
            offset: 0,
            search_nutrient: 'calories'
        })
        .then((response) => {
            resolve(response.results);
        }, (error) => {
            reject(error);
        })
        .catch((error) => {
            reject(error);
        });
    });
}

/**
 * @param {String} id ID of nutrition item
 * @returns {Promise.<Object>} Nutrition information
 */
module.exports.get = function(id) {
    return new Promise((resolve, reject) => {
        nutritionix.item({ id : id})
        .then((item) => {
            resolve(item);
        })
        .catch((error) => {
            reject(error);
        })
    });
}