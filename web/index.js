var express = require('express')
var app = express();
var twitter = require('../backend/twitter');
var youtube = require('../backend/youtube');
var mongoose = require('mongoose');
var taskController = require('../controllers/taskController');

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use('/', express.static(__dirname + '/public'))

app.use('/tasks', taskController)

app.use('/twitter', twitter)
app.use('/youtube', youtube)

app.get('/', function(req, res){
   res.render("index", {nav: "index"});
});

app.get('/settings', function(req, res){
   res.render("tasks", {nav: "settings"});
});

mongoose.connect('mongodb://localhost/dashboard');

app.listen(3000);
