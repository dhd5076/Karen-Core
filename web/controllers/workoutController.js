var express = require('express');
var router = express.Router()

router.get('/', function(req, res) {
    res.render('pages/gym', {nav: "gym"})
});

module.exports = router