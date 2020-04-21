/**
 * @file Router For /kitchen
 */
var express = require('express');
var foodItemRouter = require('./foodItem');
var router = express.Router();

router.use('/foodItem', foodItemRouter);

module.exports = router;