var express = require('express');
var router = express.Router();

var strainRouter = require('./strain');
var coronaRouter = require('./corona');
var bibleRouter = require('./bible');

router.use('/strain', strainRouter);
router.use('/corona', coronaRouter);
router.use('/bible', bibleRouter);
module.exports = router;