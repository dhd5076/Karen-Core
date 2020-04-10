var express = require('express');
var router = express.Router(); 
var request = require('request');

router.get('/stats', function(req, res) {
    res.send("Corona Endpoint");
});

module.exports = router;