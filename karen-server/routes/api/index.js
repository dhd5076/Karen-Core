var express = require('express');
var colors = require('colors');
var response = require('../../utils/response');

var hueRouter = require('./hue');
var foodRouter = require('./food');
var userRouter = require('./user');
var musicRouter = require('./music');
var bankingRouter = require('./banking');
var discordRouter = require('./discord');

var router = express.Router();

router.use('/hue', hueRouter);
router.use('/food', foodRouter);
router.use('/user', userRouter);
router.use('/spotify', musicRouter);
router.use('/banking', bankingRouter);
router.use('/discord', discordRouter);

// GET /api/ping
router.get('/ping', (req, res) => {
    console.log(colors.grey("[PING] From " + req.query.who));
    res.send('pong');
});

// GET /*
router.use('*', function(req, res){
    res.send(response.generate(null, new response.APIError('API Endpoint ' + req.method + ' ' + req.baseUrl + req.path + ' Doesn\'t Exist')));
});

module.exports = router;