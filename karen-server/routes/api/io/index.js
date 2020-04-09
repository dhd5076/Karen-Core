var express = require('express');
var router = express.Router();

var torRouter = require('./tor');

router.use('/tor', torRouter);

module.exports = router;