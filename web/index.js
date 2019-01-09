var express = require('express')
var app = express();
var mongoose = require('mongoose');
var indexRouter = require('./routes');

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use('/', express.static(__dirname + '/public'))

app.use('/', indexRouter);

mongoose.connect('mongodb://localhost/dashboard');

app.listen(3000);
