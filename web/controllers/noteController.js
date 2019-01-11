var express = require('express');
var router = express.Router()

router.get('/', function(req, res) {
    res.render('pages/notes', {nav: "notes"})
});

module.exports = router