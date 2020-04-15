/**
 * @file /spotify/ Router
 */

var express = require('express');
var logger = require('../../utils/logger');
var response = require('../../utils/response');
var spotifyController = require('../../controllers/spotifyController');

var router = express.Router();

// GET /spotify/addAccount
router.get('/addAccount', function(req, res) {
    spotifyController.getAuthURL().then(function(authURL){
        res.redirect(authURL);
    });
});

// GET /spotify/authCB
router.get('/authorize', function(req, res) {
    spotifyController.authorizeAccount(req.query.code)
    .then(() => {
        res.send(response.generate(null, null));
    })
    .catch(() => {
        logger.error('Spotify', 'Unable to Authorize Account')
    })
});

// GET /spotify/pause
router.get('/pause', function(req, res) {
        spotifyController.pauseMusic()
        .then(function() {
            req.send(response.generate(null, null));
        })
});

module.exports = router;