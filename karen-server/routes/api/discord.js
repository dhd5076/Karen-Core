var express = require('express');
var logger = require('../../utils/logger');
var inputRouter = require('./input');
var router = express.Router();
const Discord = require('discord.js');
const client = new Discord.Client();
const colors = require('colors');
const config = require('../../config');
const GameSDK = require('discord-game');

module.exports = router;

module.exports.init = function(cb) {
    client.on('ready', () => {
        logger.log('Discord', 'Logged in as ' + client.user.tag);
    });

    client.on('message', msg => {
        if(!msg.author.bot) {
            inputRouter.process(msg.content, function(response) {
                msg.channel.send(response);
            });
            logger.info('Discord', msg.author.username + " : " + msg.content);
        }
    });
    try {
        client.login(config.discord_key);
    } catch {
        logger.error('Discord', 'Failed to connect to Discord');
    }

    logger.log('Discord', 'Connecting to GameSDK');

    GameSDK.create('522226613857812481', true);
    this.setPresence();

    cb();
}

module.exports.sendMessage = function(message) {

}

module.exports.setPresence = function() {
    const activity = {
        details: 'Running',
        assets: {
          largeImage: 'karen',
          largeText: 'Karen',
          samllImage: 'karen',
          smallText: 'Karen'
        },
        timestamps: {
          startAt: new Date()
        }
    }

    GameSDK.Activity
            .update(activity)
            .then(function() { 
                logger.log('Discord', 'Updated rich presence')
             })
             .catch((err) => {
                logger.error('Discord', 'Error updating rich presence');
             });
    
    setInterval(function() {
        GameSDK.runCallback(); // => true
    }, 1000/60)
}