var express = require('express');
var router = express.Router();
var colors = require('colors');

router.get('/logURL', (req, res) => {
    console.log(colors.grey("[Safari] " + req.query.URL));
    res.send();
});

module.exports = router;