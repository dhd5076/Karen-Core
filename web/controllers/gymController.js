var express = require('express');
var router = express.Router()

router.get('/', function(req, res) {
    res.render('pages/gym')
});

module.exports = router