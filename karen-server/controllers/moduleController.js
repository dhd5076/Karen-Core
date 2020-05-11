/**
 * @file Provides utilities for interfacing with spotify
 */
var logger = require('../utils/logger');
var musicController = require('./musicController');
var plaidController = require('./plaidController');
var discordController = require('./discordController');
var replyController = require('./replyController');
var hueController = require('./hueController');

/**
 * Initialize All Controllers
 */
module.exports.initializeControllers = function() {
    logger.log('Karen', 'Initializing Modules...');
    musicController.init()
    .then(plaidController.init())
    .then(replyController.init())
    .then(hueController.init())
    .catch(() => {
        logger.error('Karen', 'Error Initializing Spotify Module');
    })
    .then(discordController.init());
}