0/**
 * @file /recipe/ Router
 */
var express = require('express');
var logger = require('../utils/logger');
var response = require('../utils/response');
var recipeController = require('../controllers/recipeController');

var router = express.Router();

// GET /recipe
router.get('/', (req, res) => {
    if(req.isAuthenticated) {
        recipeController.getAll()
        .then((recipes) => {
            res.send(response.generate(recipes, null));
        })
        .catch((error) => {
            res.send(response.generate(null, error));
        })
    } else {
        res.send(response.generate(null, "Unauthorized"));
    }
});

// GET /recipe/:id
router.get('/:id', (req, res) => {
    if(req.isAuthenticated) {
        recipeController.get(req.params.id)
        .then((recipes) => {
            res.send(response.generate(recipes, null));
        })
        .catch((error) => {
            res.send(response.generate(null, error));
            console.log(error);
        })
    } else {
        res.send(response.generate(null, "Unauthorized"));
    }
});

// POST /recipe
router.post('/', (req, res) => {
    if(req.isAuthenticated) {
        recipeController.create(req.body.name, req.body.author)
        .then(() => {
            res.send(response.generate(null, null));
        })
        .catch((error) => {
            res.send(response.generate(null, error));
        })
    } else {
        res.send(response.generate(null, "Unauthorized"));
    }
});

module.exports = router;