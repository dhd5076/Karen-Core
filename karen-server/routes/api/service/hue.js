/**
 * @file /api/hue Router
 */

var express = require('express');
var hueController = require('../../controllers/hueController');
var response = require('../../../utils/response');
var logger = require('../../../utils/logger');

var router = express.Router();

// POST /api/hue/light/:id
router.post('/light/:id', (req, res) => {
    hueController.setLightStatus(
        id, 
        req.body.on, 
        req.body.brightness, 
        req.body.hue, 
        req.body.saturation)
    .then(() => {
        res.send(response.generate(null, null));
    })
    .catch((error) => {
        res.send(response.generate(null, error.message));
    });
});

// GET /api/hue/lights
router.get('/lights', (req, res) => {
    hueController.getLights()
    .then(lights => {
        res.send(response.generate(lights, null));
    })
    .catch((error) => {
        res.send(response.generate(null, error.message));
    });
});

module.exports = router;