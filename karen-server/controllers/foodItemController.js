/**
 * Provides Utilities For Handling Food Items
 */

var FoodItem = require('../models/foodItem');
var logger = require('../utils/logger');
var config = require('../config');
var request = require('request');

/**
 * Gets 25 FoodItem Objects By Name Query
 * @param {String} query The Search Query
*/
module.exports.searchFoodItems = function(query) {
    var promise = new Promise((resolve, reject) => {
        request('https://api.nal.usda.gov/fdc/v1/foods/search?api_key=' + config.NREL_API_KEY + '&pageSize=25&query=' + query, async (error, response, body) => {
            if(!error) {
                foodItems = JSON.parse(body).foods;
                foodItems.forEach((foodItemElement) => {
                    FoodItem.findOne({fdcId : foodItemElement.fdcId}, (err, foodItem) => {
                        if(foodItem != null) {
                        } else {
                            var newFoodItem = new FoodItem({
                                fdcId : foodItemElement.fdcId,
                                name : foodItemElement.description,
                                nutrient: {
                                    protein: foodItemElement.foodNutrients[0].value,
                                    fat: foodItemElement.foodNutrients[1].value,
                                    carbohydrates: foodItemElement.foodNutrients[2].value
                                }
                            });
                            newFoodItem.save();
                        }
                    })
                });
            } else {
                reject();
            }
        });
    });
    return promise;
}