var Task = require('../models/task');
var express = require('express');
var router = express.Router()

router.get('/create', function(req, res) {
    var task = new Task({
        name: 'This is the name of a task',
        due: Date.now()
    });

    task.save();
    res.send('true');
});

router.get('/delete/:id', function(req, res) {
    Task.findByIdAndRemove(req.params.id, function(err, task){
        res.render('tasks')
    });
});

router.get('/edit/:id', function(req, res) {
    var task = new Task({

    });

    task.save();
});

router.get('/', function(req, res) {
    Task.find({}, function(err, tasks){
        res.render('tasks', {tasks: tasks})
    }); 
});

module.exports = router