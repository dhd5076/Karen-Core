var SpotifyWebApi = require('spotify-web-api-node');
var config = require('../config');
var express = require('express');
var router = express.Router();

var spotifyApi = new SpotifyWebApi({
    clientId: config.spotify_clientID,
    clientSecret: config.spotify_secret,
    redirectUri: 'karen.host/spotify/callback'
  });

spotifyApi.setAccessToken(config.spotify_access_token);

router.get('/play', function(req, res){
    spotifyApi.play({
    })
    .then(function(data) {
      res.send('True');
    }, function(err) {
      res.send('False')
      
      console.log(err);
    });
});

router.get('/pause', function(req, res){
    spotifyApi.pause({
    })
    .then(function() {
      res.send('True');
    }, function(err) {
      res.send('False')
    });
});

router.get('/getCurrentState', function(req, res){
    spotifyApi.getMyCurrentPlaybackState({
    })
    .then(function(data) {
      res.send(data.body);
    }, function(err) {2
      res.send('False')
    });
});

router.get('/getCurrentTrack', function(req, res){
    spotifyApi.getMyCurrentPlayingTrack({
    })
    .then(function(data) {
      res.send(data.body);
    }, function(err) {
      res.send('False')
    });
});

router.get('/', function(req, res){
    res.render('pages/music.pug');
});


module.exports = router;