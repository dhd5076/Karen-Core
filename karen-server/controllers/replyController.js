/**
 * @file Handles Responing To Text Inputs
 */
var logger = require('../utils/logger');
var natural = require('natural');
var classifier = new natural.BayesClassifier();

 module.exports.processTextInput = function(input) {
    logger.info('Input', 'Received Text Input: ' + input);
    return JSON.stringify(classifier.getClassifications(input));
 }

 module.exports.init = function() {
     logger.log('Reply', 'Inintializing Reply Module...');
     trainClassifier()
     .then(() => {
         logger.log('Reply', 'Initialized');
     })
 }

 function trainClassifier() {
    var promise = new Promise((resolve, reject) => {
        classifier.addDocument([
            'what time is it?',
            'current time',
            'time'], 'get-current-time');

        classifier.addDocument([
            'what is your name',
            'who are you?',
            'what are you called?'], 'get-app-name');

        classifier.addDocument([
            'who is Dylan',
            'tell me about Jane',
            'who is joe?'], 'get-person');
        classifier.train();
        resolve();
    })
    return promise;
 }