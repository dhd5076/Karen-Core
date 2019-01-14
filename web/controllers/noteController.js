var Class = require('../models/note');
var express = require('express');
var router = express.Router()

router.get('/', function(req, res) {
    Class.find({}, function(err, classes){
        res.render('pages/notes', {
            nav: "notes",
            classes: classes
        });  
    });
});

module.exports = router