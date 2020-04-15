var express = require('express');
var router = express.Router(); 
var request = require('request');
var logger = require('../../utils/logger');
var getTitleAtUrl = require('get-title-at-url');

router.get('/getVerses', function(req, res) {
    request.get('http://bible-api.com/LUKE+24', (error, response) => {
        res.send(JSON.parse(response.body).verses);
    });
});

module.exports = router;