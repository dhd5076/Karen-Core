var express = require('express');
var router = express.Router();
const Discord = require('discord.js');
const client = new Discord.Client();
const colors = require('colors');

router.use('/test', function(req, res) {
    console.log();
});

module.exports = router;

module.exports.init = function(cb) {
    client.on('ready', () => {
        console.log(colors.green(`Logged in as ${client.user.tag}!`));
    });

    client.on('message', msg => {
        console.log(colors.grey("[DISCORD] "  + msg.member.nickname + " : " + msg.content));
    });
    try {
        client.login('NTIyMjI2NjEzODU3ODEyNDgx.Xoyx0A.t_6mvkS5_Mfh5_WKdzNxK3Dnm_w');
    } catch {
        console.log(colors.red('[Critical] Failed to connect to Discord'));
    }
    cb();
}

module.exports.sendMessage = function(message) {

}