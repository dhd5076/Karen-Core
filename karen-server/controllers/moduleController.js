/**
 * @file Provides utilities for interfacing with spotify
 */
var logger = require('../utils/logger');
var spotifyController = require('./spotifyController');

/**
 * Initialize All Controllers
 */
module.exports.initializeControllers = function() {
    logger.log('Karen', 'Initializing Modules...');
    spotifyController.init().then(() => {
        logger.log('Karen', 'All Modules Initalized')
    })
    .catch(() => {
        logger.error('Karen', 'Error Initializing Spotify Module');
    });
}