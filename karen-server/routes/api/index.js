var express = require('express');
var colors = require('colors');
var response = require('../../utils/response');

var hueRouter = require('./hue');
var spotifyRouter = require('./spotify');
var bankingRouter = require('./banking');
var discordRouter = require('./discord');

var router = express.Router();

router.use('/hue', hueRouter);
router.use('/spotify', spotifyRouter);
router.use('/banking', bankingRouter);
router.use('/discord', discordRouter);

/**
 * Check if API is live
 */
router.get('/ping', (req, res) => {
    console.log(colors.grey("[PING] From " + req.query.who));
    res.send('pong');
});

/**
 * Default for if no endpoints were found
 */
router.use('*', function(req, res){
    res.send(response.generate(null, new response.APIError('API Endpoint ' + req.method + ' ' + req.baseUrl + req.path + ' Doesn\'t Exist')));
});

module.exports = router;