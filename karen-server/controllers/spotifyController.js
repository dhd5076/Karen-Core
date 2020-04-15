/**
 * @file Provides utilities for interfacing with spotify
 */

var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi({
    clientId: 'acd4167d626c4a25bc3124a5e1377c93',
    clientSecret: '6e5f037af9be4b32aedaf303aa816177',
    redirectUri: 'https://localhost/api/spotify/authorize'
});

var logger = require('../utils/logger');

/**
 * Get URL for authorizing spotify account
 */
module.exports.getAuthURL = function() {
    var promise = new Promise((resolve, reject) => {
        var scopes = ['user-read-private', 'user-read-email', 'user-read-playback-state', 'user-read-currently-playing', 'app-remote-control', 'streaming', 'user-modify-playback-state']
        state = 'add-user-data-here';
    
        resolve(spotifyApi.createAuthorizeURL(scopes, state));
    });
    return promise;
}

module.exports.authorizeAccount = function(code) {
    var promise = new Promise((resolve, reject) => {
        logger.log('Spotify', 'Authorized Account Successfully');
        spotifyApi.authorizationCodeGrant(code)
        .then((data) => {
            spotifyApi.setAccessToken(data.body['access_token']);
            resolve();
        })
        .catch((error) => {
            console.log(error);
            reject();
        });
    });
    return promise;
}

/**
 * Pauses Spotify
 */
module.exports.pauseMusic = function() {
    var promise = new Promise((resolve, reject) => {
        spotifyApi.pause()
        .then(() => {
            resolve();
        })
        .catch((err) => {
            reject(err);
        });
    })
    return promise;
}

/**
 * Play Music
 */
module.exports.playMusic = function(cb) {
    var promise = new Promise((resolve, reject) => {
        spotifyApi.play()
        .then(() => {
            resolve();
        })
        .catch((err) => {
            logger.warn('Spotify', "Unable to pause music")
            reject();
        });
    });
    return promise;
}

/**
 * Get Playback Status
 */
module.exports.getPlaybackStatus = function() {
    var promise = new Promise((resolve, reject) => {
        resolve();
    });
    return promise;
}

/**
 * Get Module Status
 */
module.exports.getStatus = function() {
    var promise = new Promise((resolve, reject) => {
        logger.error('Spotify Controller', 'Not Implemented');
    }); 
    return promise;
}

/**
 * Initialize Controller
 */
module.exports.init = function() {
    var promise = new Promise((resolve, reject) => {
        logger.log('Spotify', 'Initializing...');
        logger.log('Spotify', 'Initialized')
        resolve();
    })
    return promise;
}