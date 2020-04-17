/**
 * @file Provides Utilities For Interfacing With Plaid
 */
var express = require('express');
var plaid = require('plaid');
var logger = require('../utils/logger');
var plaidClient;
var access_token;

/**
 * Initialize Plaid Controller
 */
module.exports.init = function() {
    logger.log('Plaid', 'Intializing...');
    plaidClient = new plaid.Client(
        '5e12267e06c4240013566a49',
        '31f686fd2fc30068bb9a9216458639',
        'b7b198bd44563eed034cc18e19bb04',
        plaid.environments.development
    );
    logger.log('Plaid', 'Intialized');
}

/**
 * Add Bank Account
 */
module.exports.addBankAccount = function(public_token) {
    var promise = new Promise((resolve, reject) => {
        plaidClient.exchangePublicToken(public_token)
        .then((res) => {
            access_token = res.access_token;
            resolve();
        })
        .catch((error) => {
            reject(error);
        });
    });
    return promise;
}

/**
 * Get Account Balance
 */
module.exports.getBankAccountBalance = function() {
    var promise = new Promise((resolve, reject) => {
        plaidClient.getBalance(access_token)
        .then((res) => {
            logger.info('Plaid', 'Got Account Balance: ' + res);
            resolve(res);
        })
        .catch((error) => {
            logger.error('Plaid', 'Failed To Get Account Balance');
            reject(error);
        });
    });
    return promise;
}