var express = require('express');
var colors = require('colors');
var response = require('../../utils/response');

var userRouter = require('./user');

var router = express.Router();

router.use('/user', userRouter);

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