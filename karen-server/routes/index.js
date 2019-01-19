var express = require('express');
var router = express.Router();

var games = require('./games');
var settings = require('./settings');
var events = require('./events')
var docs = require('./docs');
var fitness = require('./fitness')
var location = require('./location');

var taskController = require('../controllers/taskController');
var contactController = require('../controllers/contactController');
var gymController = require('../controllers/workoutController');
var noteController = require('../controllers/noteController');
var classController = require('../controllers/classController');

router.use('/games', games);
router.use('/settings', settings);
router.use('/events', events);
router.use('/docs', docs)
router.use('/location', location)

router.use('/task', taskController)
router.use('/contacts', contactController);
router.use('/fitness', fitness)
router.use('/notes', noteController)
router.use('/classes', classController);

router.get('/', function(req, res){
    res.render("index", {nav: "index"});
 });

module.exports = router;