var express = require('express');
var router = express.Router();

var discordRouter = require('./discord');
var redditRouter = require('./reddit');
var spotifyRouter = require('./spotify');

router.use('/discord', discordRouter);
router.use('/reddit', redditRouter);
router.use('/spotify', spotifyRouter);

module.exports = router;