var express = require('express');
var router = express.Router();

var hueRouter = require('./hue');

router.use('/hue', hueRouter);

module.exports = router;