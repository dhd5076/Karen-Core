var Task = require('../models/task');
var express = require('express');
var router = express.Router()

router.get('/create', function(req, res) {
    res.render('pages/contacts')
});

router.get('/edit/:id', function(req, res) {
    res.render('pages/contacts')
});

router.get('/delete/:id', function(req, res) {
    res.render('pages/contacts')
});

router.get('/', function(req, res) {
    res.render('pages/contacts')
});

module.exports = router