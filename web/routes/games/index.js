var express = require('express');
var router = express.Router();
var getJSON = require('get-json')
var exec = require('child_process').exec;

router.get('/', function(req, res){
    getJSON('http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=B7BBE4099E1DA820CA1626FA7A41B1BF&steamid=76561198074397716/&format=json?count=10', function(error, response){ 

    games = response.response.games.sort(function(game1, game2){
        return game2.playtime_forever - game1.playtime_forever
    });
    res.render('pages/games', {games: games});
    });
 });

 router.get('/play/:id', function(req, res) {
    exec('F:\\Steam\\steam.exe steam://rungameid/' + req.params.id);
    res.redirect('/games');   
 });

module.exports = router;