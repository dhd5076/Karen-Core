var express = require('express');
var logger = require('../../../logger');
var router = express.Router();
const Discord = require('discord.js');
const client = new Discord.Client();
const colors = require('colors');
const config = require('../../../config');

router.use('/test', function(req, res) {
    console.log();
});

module.exports = router;

module.exports.init = function(cb) {
    client.on('ready', () => {
        logger.log('Discord', 'Logged in as ' + client.user.tag);
    });

    client.on('message', msg => {
        logger.info(msg.member.nickname + " : " + msg.content);
    });
    try {
        client.login(config.discord_key);
    } catch {
        logger.error('Discord', 'Failed to connect to Discord');
    }
    cb();
}

module.exports.sendMessage = function(message) {

}