var express = require('express');
var router = express.Router();

var inputRouter = require('./input');

router.use('/input', inputRouter);

module.exports = router;