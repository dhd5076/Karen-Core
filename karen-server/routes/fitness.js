var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('pages/fitness.pug', {nav: "events"});
 });

module.exports = router;