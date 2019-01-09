var express = require('express');
var router = express.Router();
var twitter = require('../../backend/twitter');
var youtube = require('../../backend/youtube');
var games = require('./games');
var taskController = require('../controllers/taskController');

router.use('/twitter', twitter)
router.use('/youtube', youtube)
router.use('/task', taskController)
router.use('/games', games);

router.get('/', function(req, res){
    res.render("index", {nav: "index"});
 });

router.get('/settings', function(req, res){
    res.render("tasks", {nav: "settings"});
 });

module.exports = router;