var Class = require('../models/class');
var express = require('express');
var router = express.Router()

router.get('/', function(req, res) {
    res.render('pages/classes')
});

module.exports = router