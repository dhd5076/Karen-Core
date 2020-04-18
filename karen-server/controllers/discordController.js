var logger = require('../utils/logger');
var replyController = require('./replyController');
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('../config');
const GameSDK = require('discord-game');

module.exports.init = function() {
    var promise = new Promise((resolve, reject) => {
        client.on('ready', () => {
            logger.log('Discord', 'Logged in as ' + client.user.tag);
        });
    
        client.on('message', handleMessage);

        try {
            client.login(config.discord_key);
        } catch {
            logger.error('Discord', 'Failed To Connect To Discord');
            reject();
        }
    
        logger.log('Discord', 'Connecting to GameSDK');
    
        GameSDK.create('522226613857812481', true);
        setPresence();
        resolve();
    });
    return promise;
}

/**
 * Send A Message To User
 * @param {String} message The Message To Send
 */
module.exports.sendMessage= function(message) {
    // TODO: Turn Into sendMessageToUser(message, id) And sendMessage To Channel(message, id)
    return client.users.fetch('394918091034722304', true)
    .then(channel => channel.send(message))
    .then(() => {
        logger.info('Discord', 'Sent Message: ' + message)
    })
    .catch((error) => {
        logger.error('Discord', 'Error Sending Message');
        return Promise.reject(error);
    });
}

function handleMessage(message) {
    if(!message.author.bot) {
        message.channel.send(replyController.processTextInput(message.content));
    }
}

function setPresence() {
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
                logger.log('Discord', 'Updated Rich Presence')
             })
             .catch((err) => {
                logger.error('Discord', 'Error Updating Rich presence');
             });
    
    setInterval(function() {
        GameSDK.runCallback(); // => true
    }, 1000/60)
}