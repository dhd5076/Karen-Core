/**
 * @file /ingredient Router
 */
var express = require('express');
var logger = require('../utils/logger');
var response = require('../utils/response');
var ingredientController = require('../controllers/ingredientController');

var router = express.Router();

// POST /ingredient
router.post('/', (req, res) => {
    if(req.isAuthenticated) {
        ingredientController.create(
            req.body.name,
            req.body.unit, 
            req.body.calories, 
            req.body.protein, 
            req.body.fat, 
            req.body.carbs) 
        .then((ingredient) => {
            res.send(response.generate(ingredient, null))
        })
        .catch((error) => {
            res.send(response.generate(null, error.message));
        });
    } else {
        res.send(response.generate(null, "Unauthorized"))
    }
});

// GET /ingredient
router.get('/', (req, res) => {
    if(req.isAuthenticated) {
        ingredientController.getAll()
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

// GET /ingredient/:id
router.get('/:id', (req, res) => {
    if(req.isAuthenticated) {
        ingredientController.get(req.params.id)
        .then((ingredient) => {
            res.send(response.generate(ingredient, null));
        })
        .catch((error) => {
            res.send(response.generate(null, error.message));
        })
    } else {
        res.send(response.generate(null, "Unauthorized"));
    }
});

// DELETE /ingredient
router.delete('/:id', (req, res) => {
    if(req.isAuthenticated) {
        ingredientController.delete(req.params.id)
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