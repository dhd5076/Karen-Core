var express = require('express');
var router = express.Router();

var templeRouter = require('./temple');

router.use('/temple', templeRouter);

module.exports = router;