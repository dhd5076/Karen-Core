var express = require('express');
var router = express.Router();
var colors = require('colors');
var logger = require('../../../logger');

var lastHistoryItemLogged;

router.get('/logURL', (req, res) => {
    logger.info('History', 'Logged Website: ' + req.query.URL);
    lastHistoryItemLogged = req.query.URL;
    res.send();
});

module.exports = router;

module.exports.getStatus = function() {
    var statusPromise = new Promise(function(resolve) {
        resolve({
            lastHistoryItemLogged: lastHistoryItemLogged
        });
    });
    return statusPromise;
}