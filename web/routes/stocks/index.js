var express = require('express');
var router = express.Router();
var config = require('../../config');
//var Robinhood = require('robinhood')({username: 'dhd5076@rit.edu', password: '12345Wert!'})

router.get('/', function(req, res){
   /* Robinhood.accounts(function(err, response, body){
        console.log(err);
        res.send(body)
    });*/
    res.render('pages/stocks.pug');
 }); 

module.exports = router;