var express = require('express');
var router = express.Router();
var huejay = require('huejay');
var colors = require('colors');
var logger = require('../../utils/logger');

module.exports = router;

var huejayClient;
var isConnected;
var hueLights;


module.exports.init = function() {
    logger.log('Hue', 'Discovering Hue Bridges...');
    huejay.discover()
    .then(bridges => {
        isConnected = true;
        for (let bridge of bridges) {
            logger.log('Hue', 'Discovered Hue Bridge At IP: ' + bridge.ip);

            huejayClient = new huejay.Client({
                host:     bridge.ip,
                username: 'wbLt3DHBSoFb5Vq4DwrhDJxZJw0hnoN-2sDUkZYD'           
            });

            logger.log('Hue', 'Attempting To Connect To Hue Bridge...');
            huejayClient.lights.getAll().then(lights => {
            hueLights = [];
            for(let light of lights) {
                logger.log('Hue', 'Found Light: ' + light.name);
                hueLights.push({
                    name: light.name
                });
            }
        })
    }
  })
  .catch(error => {
    logger.error('Hue', 'No bridges found');
    isConnected = false;
  });
}

module.exports.getStatus = function() {
    var statusPromise = new Promise(function(resolve) {
        resolve({
            isConnected: isConnected,
            lights: hueLights
        });
    });
    return statusPromise;
}