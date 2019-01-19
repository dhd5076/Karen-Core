var express = require('express');
var router = express.Router();

router.all('/', function(req, res){
    console.log(req.body.current.geometry);
 });

module.exports = router;