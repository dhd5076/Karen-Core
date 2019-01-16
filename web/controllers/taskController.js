var Task = require('../models/task');
var Class = require('../models/class')
var express = require('express');
var router = express.Router()

router.get('/create', function(req, res) {
    var task = new Task({
        name: req.query.name,
        class: req.query.class,
        due: req.query.due_date,
        completed: false
    });
    task.save();
    res.redirect('/task');
});

router.get('/delete/:id', function(req, res) {
    Task.findByIdAndRemove(req.params.id, function(err, task){
        res.redirect('/task');
    });
});

router.get('/complete/:id', function(req, res) {
    Task.findById(req.params.id, function(err, task){
        task.completed = true;
        task.save();
        res.redirect('/task');
    });
});


router.get('/', function(req, res) {
    Task.find({}, function(err, tasks){
        Class.find({}, function(err, classes) {
            res.render('pages/tasks', {
                tasks: tasks,
                classes: classes,
                nav: "tasks"
            });
        })
    }); 
});

module.exports = router