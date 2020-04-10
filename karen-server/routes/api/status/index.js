var express = require('express');
var router = express.Router();
var colors = require('colors');
var gpsRouter = require('../logging/gps');
var hueRouter = require('../automation/hue');
var historyRouter = require('../logging/history');

router.get("/current", (req, res) => {
    console.log(colors.grey("[STATUS] Request From " + req.query.who));
    var currentTime = Date.now();

    historyRouter.getStatus().then(function(historyStatus) {
        this.historyStatus = historyStatus;
    })
    .then(hueRouter.getStatus().then(function(hueStatus) {
        this.hueStatus = hueStatus;
    })
    .then(gpsRouter.getStatus().then(function(gpsStatus) {
        res.send({
            currentTime: currentTime,
            historyStatus: historyStatus,
            gpsStatus: gpsStatus,
            hueStatus: hueStatus
        });
    })));
});

module.exports = router;