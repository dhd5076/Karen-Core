/**
 * @file /music/ Router
 */

var express = require('express');
var logger = require('../../utils/logger');
var response = require('../../utils/response');
var spotifyController = require('../../controllers/musicController');

var router = express.Router();

// GET /api/music/addAccount
router.get('/addAccount', (req, res) => {
    spotifyController.getAuthURL().then(function(authURL){
        res.redirect(authURL);
    });
});

// GET /api/music/authorize
router.get('/authorize', (req, res) => {
    spotifyController.authorizeAccount(req.query.code)
    .then(() => {
        res.send(response.generate(null, null));
    })
    .catch(error => {
        res.send(response.generate(null, new response.APIError(error.message)));
        logger.error('Spotify', 'Unable to Authorize Account')
    })
});

// GET /api/music/getPlaybackState
router.get('/getPlaybackState', (req, res) => {
    spotifyController.getPlaybackStatus()
    .then((playbackState) => {
        res.send(response.generate(playbackState, null));
    })
    .catch((error) => {
        logger.error('Spotify', 'Error Trying To Get Playback State : ' + error.message);
        res.send(response.generate(null, new response.APIError(error.message)));
    });
});

// POST /api/music/skipForward
router.post('/skipForward', (req, res) => {
    spotifyController.skipForward()
    .then(() => {
        res.send(response.generate(null, null));
    })
    .catch((error) => {
        logger.error('Spotify', 'Error Trying To Skip To Next Song : ' + error.message);
        res.send(response.generate(null, new response.APIError(error.message)));
    });
});

// POST /api/music/skipBackward
router.post('/skipBackward', (req, res) => {
    spotifyController.skipBackward()
    .then(() => {
        res.send(response.generate(null, null));
    })
    .catch((error) => {
        logger.error('Spotify', 'Error Trying To Skip To Previous Song : ' + error.message);
        res.send(response.generate(null, new response.APIError(error.message)));
    });
});

// POST /api/music/pause
router.post('/pause', (req, res) => {
        spotifyController.pauseMusic()
        .then(() => {
            res.send(response.generate(null, null));
        })
        .catch((error) => {
            logger.error('Spotify', 'Error Trying To Pause Music : ' + error.message);
            res.send(response.generate(null, new response.APIError(error.message)));
        })
});

// POST /music/play
router.post('/play', (req, res) => {
    spotifyController.playMusic()
        .then(() => {
            res.send(response.generate(null, null));
        })
        .catch((error) => {
            logger.error('Spotify', 'Error Trying To Play Music : ' + error.message);
            res.send(response.generate(null, new response.APIError(error.message)));
        })
});

module.exports = router;