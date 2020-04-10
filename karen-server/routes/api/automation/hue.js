var express = require('express');
var router = express.Router();
var huejay = require('huejay');
var colors = require('colors');

module.exports = router;

var huejayClient;
var isConnected;
var hueLights;

module.exports.init = function() {
    console.log(colors.green("[HUE] Discovering Hue Bridges..."))
    huejay.discover()
    .then(bridges => {
        isConnected = true;
        for (let bridge of bridges) {
            console.log(colors.green("[HUE] Discovered Hue Bridge At IP: " + bridge.ip));

            huejayClient = new huejay.Client({
                host:     bridge.ip,
                username: 'wbLt3DHBSoFb5Vq4DwrhDJxZJw0hnoN-2sDUkZYD'           
            });

            console.log(colors.green("[HUE] Attempting To Connect To Hue Bridge..."));
            huejayClient.lights.getAll().then(lights => {
            hueLights = [];
            for(let light of lights) {
                console.log(colors.green("[HUE] Found Light: ") + colors.green(light.name));
                hueLights.push({
                    name: light.name
                });
            }
        })
    }
  })
  .catch(error => {
    console.log(`[HUE] Failed To Find Bridges`);
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