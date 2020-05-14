/**
 * @file /api/banking/ Router
 */

 var express = require('express');
 var response = require('../../utils/response');
 var logger = require('../../utils/logger');
 var moneyController = require('../../controllers/moneyController');
 var router = express.Router();

// POST /api/banking/addBankAccount
router.post('/addBankAccount', (req, res) => {
    plaidController.addBankAccount(req.body.public_token)
    .then(() => {
        logger.log('Plaid', 'Added Bank Account Successfully');
        res.send(response.generate(null, null));
    })
    .catch((error) => {
        logger.log('Plaid', 'Failed To Add Bank Account');
        res.send(response.generate(null, new response.APIError(error.message)));
    });
});

// GET /api/banking/getAccountBalance
router.get('/getAccountBalance', (req, res) => {
    plaidController.getBankAccountBalance()
    .then((balance) => {
        logger.log('Plaid', 'Got Bank Account Balance: ' + balance)
        res.send(response.generate(balance, null));
    })
    .catch((error) => {
        logger.error('Plaid', 'Failed To Get Bank Account Balance ' + error);
        res.send(response.generate(null, new response.APIError(Error)));
    });
});

 module.exports = router;