/**
 * @file Router For /kitchen/foodItem
 */
var express = require('express');
var router = express.Router();

// GET /kitchen/foodItem/
router.get('/', (req, res) => {
    res.render('kitchen/viewFoodItems');
});

module.exports = router;