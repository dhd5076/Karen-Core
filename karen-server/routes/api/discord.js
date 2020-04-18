/**
 * /api/discord Router
 */
var express = require('express');
var discordController = require('../../controllers/discordController');
var response = require('../../utils/response');
var logger = require('../../utils/logger');
var router = express.Router();

// POST /api/discord/sendMessage
router.post('/sendMessage', (req, res) => {
    discordController.sendMessage(req.body.message)
    .then(() => {
        res.send(response.generate(null, null));
    })
    .catch((error) => {
        res.send(response.generate(null, error));
    })
});

module.exports = router;