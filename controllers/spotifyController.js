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
    return new Promise((resolve, reject) => {
        var scopes = ['user-read-private', 'user-read-email', 'user-read-playback-state', 'user-read-currently-playing', 'app-remote-control', 'streaming', 'user-modify-playback-state']
        state = 'add-user-data-here';
    
        resolve(spotifyApi.createAuthorizeURL(scopes, state));
    });
}

/**
 * Authorize Spotify Application
 * @param {String} code The Authentication Code Used For Obtaining Access Token
 */
module.exports.authorizeAccount = function(code) {
    return new Promise((resolve, reject) => {
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
    return new Promise((resolve, reject) => {
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
    return new Promise((resolve, reject) => {
        spotifyApi.play()
        .then(() => {
            resolve();
        })
        .catch((error) => {
            reject(error);
        });
    })
}

/**
 * Skip To Next Song
 */
module.exports.skipForward = function() {
    return new Promise((resolve, reject) => {
        spotifyApi.skipToNext()
        .then(() => {
            resolve();
        })
        .catch((error) => {
            reject(error);
        });
    });
}

/**
 * Skip To Previous Song
 */
module.exports.skipBackward = function() {
    return new Promise((resolve, reject) => {
        spotifyApi.skipToPrevious()
        .then(() => {
            resolve();
        })
        .catch((error) => {
            reject(error);
        });
    });
}

/**
 * Get Playback Status
 */
module.exports.getPlaybackStatus = function() {
    return new Promise((resolve, reject) => {
        spotifyApi.getMyCurrentPlaybackState()
        .then((data) => {
            resolve({
                name: data.body.item.name,
                artist: data.body.item.artists[0].name,
                image_url: data.body.item.album.images[0].url,
                is_playing: data.body.is_playing
            });
        })
        .catch((error) => {
            reject(error);
        });
    });
}


/**
 * Initialize Controller
 */
module.exports.init = function() {
    return new Promise((resolve, reject) => {
        logger.log('Spotify', 'Initializing...');
        spotifyApi = new SpotifyWebApi({
            clientId: 'acd4167d626c4a25bc3124a5e1377c93',
            clientSecret: '6e5f037af9be4b32aedaf303aa816177',
            redirectUri: 'http://localhost/api/spotify/authorize'
        });
        logger.log('Spotify', 'Initialized');
        resolve();
    })
}