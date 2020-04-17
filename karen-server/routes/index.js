var express = require('express');
var router = express.Router();

var apiRouter = require('./api');
var gameRouter = require('./game');
var demoRouter = require('./demos');
var accountsRouter = require('./accounts');

router.use('/api', apiRouter);
router.use('/game', gameRouter);
router.use('/demos', demoRouter);
router.use('/accounts', accountsRouter);

module.exports = router;