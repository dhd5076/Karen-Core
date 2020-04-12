var express = require('express');
var router = express.Router();
var colors = require('colors');
var gpsRouter = require('../logging/gps');
var hueRouter = require('../automation/hue');
var historyRouter = require('../logging/history');
var coronaRouter = require('../data/corona');

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
        this.gpsStatus = gpsStatus;
    })
    .then(coronaRouter.getStatus().then(function(coronaStatus) {
        res.send({
            currentTime: currentTime,
            historyStatus: historyStatus,
            gpsStatus: gpsStatus,
            hueStatus: hueStatus,
            coronaStatus: coronaStatus
        });
    }))));
});

module.exports = router;