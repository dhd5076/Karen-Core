var express = require('express');
var router = express.Router();

var strainRouter = require('./strain');
var coronaRouter = require('./corona');

router.use('/strain', strainRouter);
router.use('/corona', coronaRouter);

module.exports = router;