var express = require('express');
var router = express.Router();
var colors = require('colors');

router.get('/logCords', (req, res) => {
    console.log(colors.grey("[GPS] " + req.query.latitude + "," + req.query.longitude));
    res.send();
});

module.exports = router;