/**
 * @file Provides Utilities For Interfacing With Plaid
 */
var express = require('express');
var plaid = require('plaid');
var logger = require('../utils/logger');
var plaidClient;
var access_token = "access-development-5a01eccb-936f-4a62-98d4-43e43b37ab1b";

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
            console.log('Token:' + access_token);
            resolve(res);
        })
        .catch((error) => {
            reject(error);
        });
    });
    return promise;
}