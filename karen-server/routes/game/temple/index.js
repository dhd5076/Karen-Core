var express = require('express');
var router = express.Router();
var io = require('socket.io')(255);
var logger = require('../../../logger');

var games = [];

router.get('/', function(req, res) {
    res.render('temple-game/index.pug');
});

router.post('/createGame', function(req, res) {
    var gameID = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    games.push({
        gameID: gameID,
        players: [],
        turn: 0
    });
    res.redirect('/game/temple/' + gameID);
})

router.get('/:id', function(req, res) {
    res.render('temple-game/game')
});

io.on('connection', function(socket){
    logger.info('Game/Temple', 'User Connected');

    socket.on('joinGame', function(gameID){
        socket.join(gameID); 
        io.to(gameID).emit('userJoined', {
            username: "Anonymous#" + socket.id
        });
        games.forEach((game, index) => {
            if(game.gameID == gameID) {
                games[index].players.push({
                    id: socket.id,
                    username: "Anonymous"
                });
            }
        });
       broadcastGameStateUpdate(gameID);
    });

    socket.on('getGameStateUpdate', function(gameID) {
        broadcastGameStateUpdate(gameID);
    });
});

function broadcastGameStateUpdate(gameID) {
    games.forEach(function(game) {
        if(game.gameID == gameID) {
            io.to(gameID).emit('updateGameState', game);
        }
    })
}



module.exports = router;