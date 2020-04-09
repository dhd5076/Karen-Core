var express = require('express');
var router = express.Router();

var discordRouter = require('./discord');
var redditRouter = require('./reddit');

router.use('/discord', discordRouter);
router.use('/reddit', redditRouter);

module.exports = router;