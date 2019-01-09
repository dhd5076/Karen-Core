var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('pages/private.pug');
 });

module.exports = router;