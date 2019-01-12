var express = require('express');
var router = express.Router();
var Redtube = require('redtube');
const fs = require('fs');

var r = new Redtube({output: 'json'});

router.get('/', function(req, res){
    r.search({search: req.query.q}, function(err, response){
        if(!err)
        fs.readdir('I:/Videos', (err, files) => {
                res.render('pages/private', {
                    videos: response.videos,
                    files: files
                });
            });
      });
 });

module.exports = router;