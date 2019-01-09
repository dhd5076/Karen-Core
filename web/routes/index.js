var express = require('express');
var router = express.Router();
var twitter = require('../../backend/twitter');
var youtube = require('../../backend/youtube');
var games = require('./games');
var private = require('./private');
var settings = require('./settings');
var taskController = require('../controllers/taskController');
var contactController = require('../controllers/contactController');
var gymController = require('../controllers/gymController');
var noteController = require('../controllers/noteController');

router.use('/twitter', twitter)
router.use('/youtube', youtube)

router.use('/games', games);
router.use('/private', private);
router.use('/settings', settings);

router.use('/task', taskController)
router.use('/contacts', contactController);
router.use('/gym', gymController)
router.use('/notes', noteController)

router.get('/', function(req, res){
    res.render("index", {nav: "index"});
 });

module.exports = router;