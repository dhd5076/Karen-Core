var express = require('express');
var router = express.Router();

var eventController = require('../../models/event');

var historyRouter = require('./websiteVisit');
var gpsRouter = require('./gps');

router.use('/history', historyRouter);
router.use('/gps', gpsRouter);

router.post('/', );

module.exports = router;

module.exports.getStatus = function() {
    var statusPromise = new Promise(function(resolve) {
        resolve({
            lastHistoryItemLogged: lastHistoryItemLogged
        });
    });
    return statusPromise;
}

module.exports = router;