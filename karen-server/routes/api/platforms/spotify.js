var express = require('express');
var router = express.Router();
const colors = require('colors');
const config = require('../../../config');

var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi({
    clientId: 'acd4167d626c4a25bc3124a5e1377c93',
    clientSecret: '6e5f037af9be4b32aedaf303aa816177',
    redirectUri: 'https://localhost/api/platforms/spotify/authCB'
});

router.get('/auth', function(req, res) {
    var scopes = ['user-read-private', 'user-read-email', 'user-read-playback-state', 'user-read-currently-playing', 'app-remote-control', 'streaming', 'user-modify-playback-state']
    state = 'some-state-of-my-choice';

    res.redirect(spotifyApi.createAuthorizeURL(scopes, state));
});

router.get('/authCB', function(req, res) {
    console.log(colors.green("[SPOTIFY] Authorized User Account Successfully"));
    res.send("Authorized User Account Successfully");
    spotifyApi.authorizationCodeGrant(req.query.code)
    .then((data) => {
        spotifyApi.setAccessToken(data.body['access_token']);
    })
});

router.get('/pause', function(req, res) {
    console.log(colors.green("[SPOTIFY] Pausing Music..."));
    spotifyApi.pause()
    .then(() => {
        res.send("Pausing Music...");
    })
    .catch((err) => {
        console.log(colors.red("[SPOTIFY] Error while pausing music"))
        console.log(err);
    });
});

module.exports = router;

module.exports.init = function() {
    console.log(colors.green("[SPOTIFY] Connecting To Spotify..."));
    console.log(colors.yellow("[SPOTIFY] No Account Connected, Visit https://localhost/api/platforms/spotify/auth To Connect One"))
}