/**
 * @file /music/ Router
 */

var express = require('express');
var logger = require('../../utils/logger');
var response = require('../../utils/response');
var userController = require('../../controllers/userController');

var router = express.Router();

// GET /api/user
router.get('/', (req, res) => {
    userController.getAll()
    .then((users) => {
        res.send(response.generate(users, null))
    })
    .catch((error) => {
        res.send(response.generate(null, error))
    })
});

// GET /api/user/:id
router.get('/:id', (req, res) => {
    userController.get(req.param.id)
    .then((user) => {
        res.send(response.generate(user, null))
    })
    .catch((error) => {
        res.send(response.generate(null, error))
    })
});

// POST /api/user
router.post('/', (req, res) => {
    userController.create(req.body.firstname, req.body.lastname, req.body.password)
    .then((users) => {
        res.send(response.generate(users, null))
        logger.info('User', "Created New User: " + req.body.firstname + " " + req.body.lastname)
    })
    .catch((error) => {
        res.send(response.generate(null, error.message))
    })
});

module.exports = router;