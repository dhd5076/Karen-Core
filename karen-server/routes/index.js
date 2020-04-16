var express = require('express');
var router = express.Router();

var apiRouter = require('./api');
var gameRouter = require('./game');
var demoRouter = require('./demos');

router.use('/api', apiRouter);
router.use('/game', gameRouter);
router.use('/demos', demoRouter);

module.exports = router;