/**
 * @file Router For /kitchen/foodItem
 */
var express = require('express');
var foodItemController = require('../../controllers/foodItemController');
var router = express.Router();

// GET /kitchen/foodItem/
router.get('/', (req, res) => {
    if(req.query.query) {
        foodItemController.searchFoodItems(req.query.query)
        .then((foodItems) => {
            res.send(foodItems);
            //res.render('kitchen/viewFoodItems', { foodItems: foodItems});
        })
        .catch((error) => {
            logger.error('Food Item', 'Issue Searching For Item');
        })
    } else {
        res.render('kitchen/viewFoodItems');
    }
});

module.exports = router;