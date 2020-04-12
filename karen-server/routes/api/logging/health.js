var express = require('express');
var router = express.Router();
var colors = require('colors');

var lastHistoryItemLogged;

router.post('/logHealthData', (req, res) => {
    console.log(colors.grey("[EXTENSION] Logged Website: " + req.query.URL));
    lastHistoryItemLogged = req.query.URL;
    res.send();
});

module.exports = router;