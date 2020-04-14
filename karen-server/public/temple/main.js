
var socket = io.connect(":255");
var gameID = window.location.pathname.split('/')[3];

socket.emit('joinGame', gameID);

socket.on('userJoined', function(user) {
    console.log(user.username + " Joined The Game");
})

socket.on('updateGameState', function(gameState) {
    console.log(gameState);
})

var config = {
    type: Phaser.AUTO,
    width: 1023,
    height: 682,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

function preload ()
{
    socket.emit('joinGame', gameID);
    this.load.setBaseURL('http://localhost/temple/');
    this.load.image('bg', 'assets/background.jpg');
}

function create ()
{
    this.add.image(1023 / 2, 682 / 2, 'bg');
}

function update ()
{
}

var game = new Phaser.Game(config);

