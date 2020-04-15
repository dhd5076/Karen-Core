/**
 * @file Entry Point Of Application
 */
var express = require('express');
var app = express();
var https = require('https');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');
var moduleController = require('./controllers/moduleController');
var indexRouter = require('./routes');
var colors = require('colors');
var fs = require('fs');
var logger = require('./utils/logger');

console.log('\033[2J');
var nameplate = '  _  __    \n' +
                ' | |/ /__ _ _ _ ___ _ _ \n' +
                ' | \' </ _` | \'_/ -_) \' \\\n' +
                ' |_|\\\_\\\__,_|_| \___|_||_|\n' + 
                '====================================='

console.log(colors.green(nameplate));

logger.log('Karen', 'Starting up...');

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use('/', express.static(__dirname + '/public'));

app.use(session({
    secret: 'wingwingwing',
    resave: true,
    saveUninitialized: true
}));

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use('/', indexRouter);

mongoose.connect('mongodb://localhost/dashboard', {useNewUrlParser: true, useUnifiedTopology: true }, function(err) {
    if(!err) {
        logger.log('MongoDB', "Connected To MongoDB Database");
    } else {
        logger.error('MongoDB', 'Failed To Establish A Connection To MongoDB.');
    }
});

var port = 443;
var port2 = 80;

https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
  }, app)
  .listen(port, function () {
  });

  app.listen(port2, () => {
    logger.log('Express', 'Karen Running On Port ' + port2);
  });

  moduleController.initializeControllers();