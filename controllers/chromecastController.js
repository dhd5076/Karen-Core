/**
 * @file ChromecastController
 */
const ChromecastAPI = require('chromecast-api');
const logger = require('../utils/logger');
const client = new ChromecastAPI()

var devices = device

/**
 * Get all chromecast devices
 * @returns {Promise.<[Chromecast]>}
 */
module.exports.getAll = function() {
  return new Promise((resolve, reject) => {
    try {
      resolve(devices);
    } catch(error) {
      reject(error);
    }
  });
}

/**
 * Play media on chromecast
 * @param {String} id The id of the chromecast to play media on
 * @param {String} url The url of the video to play
 * @returns {Promise}
 */
module.exports.play = function(id, url) {
  return new Promise((resolve, reject) => {
    devices[id].play(url, (error) => {
      if(error) {
        reject(error)
      } else {
        resolve();
      }
    });
  });
}

client.on('device', function (device) {
    devices.push(device);
    logger.log('Chromecast', 'Found Chromecast: ' + device);
});