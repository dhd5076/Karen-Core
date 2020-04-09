var express = require('express');
var app = express();
var https = require('https');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');
var discordRouter = require('./routes/api/platforms/discord');
var indexRouter = require('./routes/');
var hueRouter = require('./routes/api/automation/hue');
var torRouter = require('./routes/api/io/tor');
var colors = require('colors');
var fs = require('fs');

console.log(colors.green('[KAREN] Starting up...'));

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
        console.log(colors.green("[MONGODB] Established Connection To MongoDB."));
    } else {
        console.log(colors.red("[MONGODB] Failed To Establish A Connection To MongoDB."));
    }
});

var port = 443;
var port2 = 80;

https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
  }, app)
  .listen(port, function () {
    console.log(colors.green('[DISCORD] Connecting To Discord...'));
    hueRouter.init()
    torRouter.init()
    discordRouter.init(function(err) {
        if(err) {
            console.log(colors.red('[DISCORD] Failed To Connect To Discord. | ' + err));
        } else {
            console.log(colors.green('[DISCORD] Connected To Discord'));
            console.log(colors.green('[EXPRESS] Karen Running On Port ' + port));
        }
    });
  });

  app.listen(port2, () => {
    console.log(colors.green('[EXPRESS] Karen Running On Port ' + port2));
  })