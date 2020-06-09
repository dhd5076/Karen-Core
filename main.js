/**
 * @file Entry Point Of Application
 */
var express = require('express');
var app = express();
var https = require('https');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');
var indexRouter = require('./routes');
var colors = require('colors');
var fs = require('fs');
var auth = require('./middleware/auth')
var logger = require('./utils/logger');
var telnet = require('telnet');
var telnetController = require('./controllers/telnetController');
var nutritionController = require('./controllers/nutritionController');

global.config = {
    http_port: 80,
    https_port: 443,
    telnet_port: 23,
    version: 'v0.0.1'
}

console.log('\033[2J');
var nameplate = '  _  __    \n' +
                ' | |/ /__ _ _ _ ___ _ _ \n' +
                ' | \' </ _` | \'_/ -_) \' \\\n' +
                ' |_|\\\_\\\__,_|_| \___|_||_|' + '    '  + global.config.version + '\n' +
                '====================================='

console.log(colors.green(nameplate));

logger.log('Karen', 'Starting up...');

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

process.on('unhandledRejection', (reason, p) => {
    console.log('=== UNHANDLED REJECTION ===');
    console.dir(reason);
});


app.use('/', express.static(__dirname + '/public'));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(session({
    secret: 'wingwingwing',
    resave: true,
    saveUninitialized: true
}));

app.use(auth)

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

https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, app)
  .listen(global.config.https_port, function () {
    logger.log('Express', 'Karen Running On Port ' + global.config.https_port);
});

app.listen(global.config.http_port, () => {
    logger.log('Express', 'Karen Running On Port ' + global.config.http_port);
});

logger.log('Telnet', 'Starting Server...');
telnet.createServer(telnetController.handleClient).listen(global.config.telnet_port);
logger.log('Telnet', 'Listening On Port ' + global.config.telnet_port);

nutritionController.search("banana")
.then((results) => {
    nutritionController.get(results[0].resource_id)
    .then((item) => {
        console.log(item)
    })
})