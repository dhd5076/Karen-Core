var SpotifyWebApi = require('spotify-web-api-node');
var config = require('../config');
var express = require('express');
var router = express.Router();

var spotifyApi = new SpotifyWebApi({
    clientId: 'fcecfc72172e4cd267473117a17cbd4d',
    clientSecret: 'a6338157c9bb5ac9c71924cb2940e1a7',
    redirectUri: 'karen.host/spotify/callback'
  });

spotifyApi.setAccessToken(config.spotify_access_token);

router.get('/play', function(req, res){
    spotifyApi.play({
    })
    .then(function(data) {
      // Output items
      console.log("Now Playing: ",data.body);
      res.send('True');
    }, function(err) {
      console.log('Something went wrong!', err);
      res.send('False')
    });
 });

module.exports = router;