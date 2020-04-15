var express = require('express');
var router = express.Router();
var colors = require('colors');
var request = require('request');
var reddit = require('reddit-wrapper-v2');
var logger = require('../../utils/logger');

var redditClient;
var userInfo;

router.get('/posts', (req, res) => {
    request.get('https://www.reddit.com/.json', function(err, content) { 
        res.send(content);
    });
});

module.exports = router;

module.exports.init = function() {
    redditClient = new reddit({
        username : "robodylan123",
        password : "Robod123!",
        app_id : "E2qoInxIdZ9aRQ",
        api_secret: "ZVdS1aNPU1BuBXt9XGlpjnDW3rg",
        user_agent: "Karen"
    });

    redditClient.api.get('/api/v1/me')
    .then(function(response) {
        userInfo = response;
    })
}