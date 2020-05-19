var express = require('express');
var colors = require('colors');
var response = require('../utils/response');

var userRouter = require('./user');
var loginRouter = require('./login');

var router = express.Router();

router.use('/user', userRouter);
router.use('/login', loginRouter);

// GET /api/ping
router.get('/ping', (req, res) => {
    res.send('pong');
});

// GET /*
router.use('/api*', function(req, res){
    res.send(response.generate(null, new response.APIError('API Endpoint ' + req.method + ' ' + req.baseUrl + req.path + ' Doesn\'t Exist')));
});

module.exports = router;