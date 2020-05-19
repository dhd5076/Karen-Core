/**
 * @file /api/item Router
 */
var express = require('express');
var logger = require('../utils/logger');
var response = require('../utils/response');
var ingredientController = require('../../controllers/ingredientController');

var router = express.Router();

// POST /api/ingredient
router.post('/', (req, res) => {
    if(req.isAuthenticated) {
        ingredientController.create(
            req.body.name,
            req.body.unit, 
            req.body.calories, 
            req.body.protein, 
            req.bpdy.fat, 
            req.body.carbs)
        .then((id) => {
            res.send(response.generate(id, null))
        })
        .catch((error) => {
            res.send(response.generate(null, error.message));
        });
    }
});

// GET /api/item
router.get('/', (req, res) => {
    if(req.isAuthenticated) {
        ingredienController.getAll()
        .then((ingredients) => {
            res.send(response.generate(ingredients, null));
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