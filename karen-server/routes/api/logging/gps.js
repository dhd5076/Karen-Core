var express = require('express');
var router = express.Router();
var colors = require('colors');

var currentLocation;

router.get('/logCords', (req, res) => {
    console.log(colors.grey("[GPS] " + req.query.latitude + "," + req.query.longitude));
    currentLocation = {
        latitude: req.query.latitude,
        longitude: req.query.longitude
    }
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