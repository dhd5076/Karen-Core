var express = require('express');
var app = express();
var https = require('https');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');
var discordRouter = require('./routes/api/platforms/discord');
var indexRouter = require('./routes/');
var colors = require('colors');
var fs = require('fs');

console.log(colors.green('Starting up...'));

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
        console.log(colors.green("Established connection to MongoDB."));
    } else {
        console.log(colors.red("Failed to establish a connection to MongoDB."));
    }
});

var port = 443;

https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
  }, app)
  .listen(port, function () {
    console.log(colors.green('Connecting to Discord...'));
    discordRouter.init(function(err) {
        if(err) {
            console.log(colors.red('[Critical] Failed to connect to discord. | ' + err));
        } else {
            console.log(colors.green('Connected To Discord'));
            console.log(colors.green('Karen running on port ' + port));
        }
    });
  });