var express = require('express');
var router = express.Router();
var colors = require('colors');
var gpsRouter = require('../event/gps');
var hueRouter = require('./hue');
var historyRouter = require('../event/websiteVisit');
var coronaRouter = require('./corona');
var logger = require('../../utils/logger');

router.get("/current", (req, res) => {
    logger.info('Status', "Request From " + req.query.who);
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