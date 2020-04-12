var express = require('express');
var app = express();
var https = require('https');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');
var discordRouter = require('./routes/api/platforms/discord');
var indexRouter = require('./routes/');
var hueRouter = require('./routes/api/automation/hue');
var historyRouter = require('./routes/api/logging/history');
var torRouter = require('./routes/api/network/tor');
var spotifyRouter = require('./routes/api/platforms/spotify');
var colors = require('colors');
var fs = require('fs');
var logger = require('./logger');

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
    logger.log('Discord','Connecting To Discord...');
    hueRouter.init();
    torRouter.init();
    spotifyRouter.init();
    discordRouter.init(function(err) {
        if(err) {
            logger.error('Discord', 'Failed To Connect To Discord');
        } else {
            logger.log('Discord', 'Connected To Discord');
            logger.log('Karen', 'Karen Running On Port ' + port);
        }
    });
  });

  app.listen(port2, () => {
    logger.log('Karen', 'Karen Running On Port ' + port2);
  })