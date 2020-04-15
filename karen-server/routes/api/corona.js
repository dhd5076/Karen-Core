var express = require('express');
var router = express.Router(); 
var request = require('request');
var logger = require('../../../logger');
var getTitleAtUrl = require('get-title-at-url');

var statistics;

router.get('/stats', function(req, res) {
    res.send(statistics);
});

function updateStatistics() {
    getTitleAtUrl("https://www.worldometers.info/coronavirus/", function(pageTitle) {
        pageTitle = pageTitle.split(' ');
        statistics = {
            total_cases: {
                text: pageTitle[0],
                integer: pageTitle[0].replace(/,/g, '')
            },
            total_deaths: {
                text: pageTitle[3],
                integer: pageTitle[0].replace(/,/g, '')
            }
        }
        logger.info('Corona',    'Updated Statistics: ' + 
                                statistics.total_cases.text + 
                                " Total Cases and "  + 
                                statistics.total_deaths.text + 
                                " Total Deaths");
    });
}

module.exports = router;

module.exports.getStatus = function() {
    var statusPromise = new Promise(function(resolve) {
        resolve({
            statistics: statistics
        });
    });
    return statusPromise;
}

var minutes = 5;
setInterval(updateStatistics, 1000 * 60 * minutes);

updateStatistics();