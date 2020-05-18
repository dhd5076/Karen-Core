var express = require('express');
var router = express.Router();

var apiRouter = require('./api');

router.use('/api', apiRouter);

// GET /
router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router;