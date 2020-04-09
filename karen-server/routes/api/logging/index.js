var express = require('express');
var router = express.Router();

var historyRouter = require('./history');

router.use('/history', historyRouter);

module.exports = router;