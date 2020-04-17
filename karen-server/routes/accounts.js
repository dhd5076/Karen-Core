/**
 * @file /accounts/ Router
 */

var express = require('express');
var logger = require('../utils/logger');
var response = require('../utils/response');

var router = express.Router();

// GET /accounts/addBankAccount
router.get('/connectBankAccount', (req, res) => {
    res.render('accounts/bank/connectBankAccount');
});

module.exports = router;