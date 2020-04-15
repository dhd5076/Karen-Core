var express = require('express');
var router = express.Router();

var historyRouter = require('./websiteVisit');
var gpsRouter = require('./gps');

router.use('/history', historyRouter);
router.use('/gps', gpsRouter);

router.post('/', (req, res) => {
    currentLocation = {
        latitude: req.query.latitude,
        longitude: req.query.longitude
    }
    logger.info('GPS', currentLocation.latitude + ", " + currentLocation.longitude);
    res.send();
});

router.get('/visitedWebsite', (req, res) => {
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

module.exports = router;