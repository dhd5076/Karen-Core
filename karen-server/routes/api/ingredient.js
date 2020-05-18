/**
 * @file /api/item Router
 */
var express = require('express');
var logger = require('../../utils/logger');
var response = require('../../utils/response');
var itemController = require('../../controllers/itemController');

var router = express.Router();

// POST /api/item
router.post('/', (req, res) => {
    itemController.create(req.body.type, req.body.name)
    .then((id) => {
        res.send(response.generate(id, null))
        logger.info('User', "Created New User: " + req.body.firstname + " " + req.body.lastname)
    })
    .catch((error) => {
        res.send(response.generate(null, error.message));
    })
});

// GET /api/item
router.get('/', (req, res) => {
    if(req.isAuthenticated) {
        itemController.getAll()
        .then((items) => {
            res.send(response.generate(items, null))
        })
        .catch((error) => {
            res.send(response.generate(null, error))
        })
    } else {
        res.send(response.generate(null, "Unauthorized"));
    }
});

// GET /api/item/:id
router.get('/:id', (req, res) => {
    if(req.isAuthenticated) {
        itemController.getByID(req.params.id)
        .then((user) => {
            res.send(response.generate(user, null));
        })
        .catch((error) => {
            res.send(response.generate(null, error));
        })
    } else {
        res.send(response.generate(null, "Unauthorized"));
    }
});

// DELETE /api/item/:id
router.delete('/:id', (req, res) => {
    if(req.isAuthenticated) {
        itemController.delete(req.params.id)
        .then(() => {
            res.send()
        })
        .catch((error) => {
            res.send(response.generate(null, null))
        });
    } else {
        req.send(response.generate(null, "Unauthorized"));
    }
});

module.exports = router;