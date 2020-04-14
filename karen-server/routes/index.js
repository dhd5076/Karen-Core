var express = require('express');
var router = express.Router();

var apiRouter = require('./api');
var gameRouter = require('./game');

router.use('/api', apiRouter);
router.use('/game', gameRouter);

module.exports = router;