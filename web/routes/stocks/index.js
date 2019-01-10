var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('pages/stocks.pug');
 });

module.exports = router;