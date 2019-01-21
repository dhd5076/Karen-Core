var Class = require('../models/class');
var express = require('express');
var router = express.Router()

router.get('/', function(req, res) {
    Class.find({}, function(err, classes) {
        if(!req.query.json == '1') {
            res.render('pages/classes', {
                nav: "classes",
                classes: classes
            });
        } else {
            res.send(classes);
        }
    });
});

router.get('/create', function(req, res) {
    var _class = new Class({
        name: req.query.name,
        short_name: req.query.short_name,
        start_time: req.query.start_time,
        end_time: req.query.end_time,
        schedule: {
            sunday: req.query.sunday == 'on',
            monday: req.query.monday == 'on',
            tuesday: req.query.tuesday == 'on',
            wednesday: req.query.wednesday == 'on',
            thursday: req.query.thursday == 'on',
            friday: req.query.friday == 'on',
            saturday: req.query.saturday == 'on',
        },
        location: req.query.location
    });
    console.log(req.query)
    _class.save();
    res.redirect('/pages/classes');
});

router.get('/delete/:id', function(req, res) {
    Class.findByIdAndRemove(req.params.id, function(err, _class){
        res.redirect('/classes');
    });
});

module.exports = router