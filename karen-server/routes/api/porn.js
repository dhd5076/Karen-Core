var express = require('express');
var router = express.Router(); 
var request = require("unirest");
var logger = require('../../utils/logger');

router.get('/search', function(req, res) {
    request.get('http://bible-api.com/LUKE+24', (error, response) => {
        res.send(JSON.parse(response.body).verses);
    });
});

module.exports = router;

module.exports.init = function() {
    logger.log('Porn', 'Initialized');
    request('https://steppschuh-json-porn-v1.p.rapidapi.com/porn/', (err, response) => {
        console.log(response);
    })
}