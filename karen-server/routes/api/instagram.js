const { Octokit } = require("@octokit/rest");
var express = require('express');
var router = express.Router();
var logger = require('../../utils/logger');
var instagram = require('instagram-private-api').IgApiClient;
var ig = new instagram();

router.use('/', function(req, res) {

});

module.exports = router;

module.exports.init = async function() {
    /* logger.log('Instagram', 'Connecting to instagram API...');
    await ig.state.generateDevice('dhd5076');
    await ig.simulate.preLoginFlow();
    const loggedInUser = await ig.account.login("dhd5076", "Robod123!");

    process.nextTick(async () => ig.simulate.postLoginFlow()); */

}