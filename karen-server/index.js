var express = require('express')
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var indexRouter = require('./routes');

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use('/', express.static(__dirname + '/public'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', indexRouter);

mongoose.connect('mongodb://localhost/dashboard', {useNewUrlParser: true});

app.listen(80);
