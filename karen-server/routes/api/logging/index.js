var express = require('express');
var router = express.Router();

var historyRouter = require('./history');
var gpsRouter = require('./gps');

router.use('/history', historyRouter);
router.use('/gps', gpsRouter);

module.exports = router;