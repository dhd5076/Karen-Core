var express = require('express');
var logger = require('../../../logger');
var router = express.Router();

router.use('/process', function(req, res) {
    var input = req.query.input;
    process(input, function(response) {
        res.send({
            response: response
        });
    });
});

module.exports = router;

module.exports.process = function(input, cb) {
    logger.log('Input', 'Processing input...');
    cb('Hello World');
}