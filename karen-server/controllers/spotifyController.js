/**
 * @file Provides Utilities For Interfacing With Spotify
 */

var SpotifyWebApi = require('spotify-web-api-node');

var logger = require('../utils/logger');
var spotifyApi;

/**
 * Get URL For Authorizing Spotify Account
 */
module.exports.getAuthURL = function() {
    var promise = new Promise((resolve, reject) => {
        var scopes = ['user-read-private', 'user-read-email', 'user-read-playback-state', 'user-read-currently-playing', 'app-remote-control', 'streaming', 'user-modify-playback-state']
        state = 'add-user-data-here';
    
        resolve(spotifyApi.createAuthorizeURL(scopes, state));
    });
    return promise;
}

/**
 * Authorize Spotify Application
 * @param {String} code The Authentication Code Used For Obtaining Access Token
 */
module.exports.authorizeAccount = function(code) {
    var promise = new Promise((resolve, reject) => {
        spotifyApi.authorizationCodeGrant(code)
        .then((data) => {
            spotifyApi.setAccessToken(data.body['access_token']);
            logger.log('Spotify', 'Authorized Account Successfully');
            resolve();
        })
        .catch((error) => {
            reject(error);
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
        .catch((error) => {
            reject(error);
        });
    })
    return promise;
}

/**
 * Play Music
 */
module.exports.playMusic = function() {
    var promise = new Promise((resolve, reject) => {
        spotifyApi.play()
        .then(() => {
            resolve();
        })
        .catch((error) => {
            reject(error);
        });
    })
    return promise;
}

/**
 * Skip To Next Song
 */
module.exports.skipForward = function() {
    var promise = new Promise((resolve, reject) => {
        spotifyApi.skipToNext()
        .then(() => {
            resolve();
        })
        .catch((error) => {
            reject(error);
        });
    });
    return promise;
}

/**
 * Skip To Previous Song
 */
module.exports.skipBackward = function() {
    var promise = new Promise((resolve, reject) => {
        spotifyApi.skipToPrevious()
        .then(() => {
            resolve();
        })
        .catch((error) => {
            reject(error);
        });
    });
    return promise;
}

/**
 * Get Playback Status
 */
module.exports.getPlaybackStatus = function() {
    var promise = new Promise((resolve, reject) => {
        spotifyApi.getMyCurrentPlaybackState()
        .then((data) => {
            resolve({
                name: data.body.item.name,
                artist: data.body.item.artists[0].name,
                image_url: data.body.item.album.images[0].url
            });
        })
        .catch((error) => {
            reject(error);
        });
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
        spotifyApi = new SpotifyWebApi({
            clientId: 'acd4167d626c4a25bc3124a5e1377c93',
            clientSecret: '6e5f037af9be4b32aedaf303aa816177',
            redirectUri: 'https://localhost/api/spotify/authorize'
        });
        logger.log('Spotify', 'Initialized');
        resolve();
    })

    return promise;
}