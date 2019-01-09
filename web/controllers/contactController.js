var Task = require('../models/task');
var express = require('express');
var router = express.Router()


router.get('/', function(req, res) {
    res.render('pages/contacts')
});

module.exports = router