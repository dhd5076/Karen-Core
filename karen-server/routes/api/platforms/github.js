const { Octokit } = require("@octokit/rest");
var express = require('express');
var router = express.Router();

router.use('/', function(req, res) {

});

module.exports = router;

module.exports.init = function(cb) {
    cb();
}