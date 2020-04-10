var express = require('express');
var router = express.Router();

var strainRouter = require('./strain');

router.use('/strain', strainRouter);

module.exports = router;