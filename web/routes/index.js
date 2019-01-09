var express = require('express');
var router = express.Router();
var twitter = require('../../backend/twitter');
var youtube = require('../../backend/youtube');
var games = require('./games');
var private = require('./private');
var taskController = require('../controllers/taskController');
var contactController = require('../controllers/contactController');

router.use('/twitter', twitter)
router.use('/youtube', youtube)

router.use('/games', games);
router.use('/private', private);

router.use('/task', taskController)
router.use('/contacts', contactController);

router.get('/', function(req, res){
    res.render("index", {nav: "index"});
 });

router.get('/settings', function(req, res){
    res.render("tasks", {nav: "settings"});
 });

module.exports = router;