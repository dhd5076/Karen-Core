var express = require('express');
var router = express.Router();
var response = require('../../utils/response');

router.get('*', function(req, res){
    res.send(response.generate(null, new response.APIError('API Endpoint ' + req.path + ' Doesn\'t Exist')));
});

module.exports = router;