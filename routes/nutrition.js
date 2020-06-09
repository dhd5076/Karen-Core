var express = require('express');
var response = require('../utils/response');

var nutritionController = require('../controllers/nutritionController');

var router = express.Router();

// GET /nutrition/search
router.get('/search', (req, res) => {
    res.send('pong');
});

module.exports = router;