var express = require('express');
var router = express.Router();

var config = require('../../config')

 router.get('/logout', function(req, res){
    if(req.session.authed) {
        req.session.authed = false;
    }
    res.render('index', {errmsg: 'Logged Out!'});
 });

 router.post('/', function(req, res) {
    if(req.body.username == config.karen_creds.username &&
        req.body.password == config.karen_creds.password) {
            req.session.authed = true
            req.session.save();
            res.redirect('/dashboard');
     } else {
         res.render('index', {errmsg: 'Username or password were incorrect'});
     }
 });

module.exports = router;