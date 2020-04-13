var express = require('express');
var router = express.Router();
var colors = require('colors');
var logger = require('../../../logger');

var currentLocation;

router.get('/logCords', (req, res) => {
    currentLocation = {
        latitude: req.query.latitude,
        longitude: req.query.longitude
    }
    logger.info('GPS', currentLocation.latitude + ", " + currentLocation.longitude);
    res.send();
});

module.exports = router;

module.exports.getStatus = function() {
    var statusPromise = new Promise(function(resolve) {
        resolve({
            currentLocation: currentLocation
        });
    });
    return statusPromise;
}