var express = require('express');
var router = express.Router();
var twitter = require('../../backend/twitter');
var youtube = require('../../backend/youtube');
var games = require('./games');
var settings = require('./settings');
var stocks = require('./stocks');
var events = require('./events')
var docs = require('../routes/docs');
var taskController = require('../controllers/taskController');
var contactController = require('../controllers/contactController');
var gymController = require('../controllers/gymController');
var noteController = require('../controllers/noteController');
var classController = require('../controllers/classController');

router.use('/twitter', twitter)
router.use('/youtube', youtube)

router.use('/games', games);
router.use('/settings', settings);
router.use('/stocks', stocks);
router.use('/events', events);
router.use('/docs', docs)

router.use('/task', taskController)
router.use('/contacts', contactController);
router.use('/gym', gymController)
router.use('/notes', noteController)
router.use('/classes', classController);

router.get('/', function(req, res){
    res.render("index", {nav: "index"});
 });

module.exports = router;