var logger = require('../utils/logger');
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports.init = function() {
    var promise = new Promise((resolve, reject) => {
        client.on('ready', () => {
            logger.log('Discord', 'Logged in as ' + client.user.tag);
        });
    
        client.on('message', handleMessage);

        client.login("DISCORD_KEY")
        .then(() => {

        })
        .catch((error) => {
            logger.error('Discord', 'Failed To Connect To Discord : ' + error.message);
        })
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