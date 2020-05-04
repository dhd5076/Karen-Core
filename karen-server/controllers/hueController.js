/**
 * @file Provides Utilities For Controlling Hue Lights
 * @author Dylan Dunn
 */

var huejay = require('huejay');
var colors = require('colors');
var logger = require('../utils/logger');

var huejayClient;
var hueLights;

/**
 * Initialize Module
 */
module.exports.init = function() {
    logger.log('Hue', 'Discovering Hue Bridges...');
    huejay.discover()
    .then(bridges => {
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

/**
 * Set Light Color
 * @param {String} id The ID of the light to update
 * @param {Boolean} on Whether or not the light is on
 * @param {Number} brightness The brightness to set the light to
 * @param {Number} hue The hue to set the light to
 * @param {Number} saturation The saturation to set the light to
 */
module.exports.setLightStatus = function(id, on, brightness, hue, saturation) {
    return new Promise((resolve, reject) => {
        huejayClient.lights.getById(id)
        .then(light => {
            light.brightness = brightness;
            light.on = on;
            light.hue = parseInt(hue);
            light.saturation = saturation;
            console.log(hue)
            return huejayClient.lights.save(light);
        })
        .catch((error) => {
            throw error;
        })
    });
}

/**
 * Get Connected Lights
 * @returns {Promise} Currently connected lights
 */
 module.exports.getLights = function() {
     return new Promise((resolve, reject) => {
        huejayClient.lights.getAll()
        .then(lights => {
            resolve(lights);
        })
        .catch((error) => {
            throw error;
        })
     });
 }