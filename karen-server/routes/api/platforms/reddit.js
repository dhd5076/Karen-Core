var express = require('express');
var router = express.Router();
var colors = require('colors');
var request = require('request');

router.get('/posts', (req, res) => {
    request.get('https://www.reddit.com/.json', function(err, content) { 
        res.send(content);
    });
});

module.exports = router;