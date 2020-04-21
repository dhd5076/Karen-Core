var express = require('express');
var router = express.Router();

var apiRouter = require('./api');
var gameRouter = require('./game');
var demoRouter = require('./demos');
var kitchenRouter = require('./kitchen');
var accountsRouter = require('./accounts');

router.use('/api', apiRouter);
router.use('/game', gameRouter);
router.use('/demos', demoRouter);
router.use('/kitchen', kitchenRouter)
router.use('/accounts', accountsRouter);

// GET /
router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router;