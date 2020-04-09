var express = require('express');
var router = express.Router();
var colors = require('colors');

var authRouter = require('./auth');
var weatherRouter = require('./weather');
var loggingRouter = require('./logging');
var platformRouter = require('./platforms');
var automationRouter = require('./automation');
var ioRouter = require('./io');

router.use('/auth', authRouter);
router.use('/weather', weatherRouter);
router.use('/logging', loggingRouter);
router.use('/platforms', platformRouter)

router.get('/ping', (req, res) => {
    console.log(colors.grey("[Ping] From " + req.query.who))
    res.send('pong');
});

module.exports = router;