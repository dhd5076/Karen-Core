/**
 * @file Router For /kitchen/foodItem
 */
var express = require('express');
var foodController = require('../../controllers/foodController');
var response = require('../../utils/response');
var logger = require('../../utils/logger');
var router = express.Router();

// GET /api/kitchen/food
router.get('/', (req, res) => {
    foodController.getAll()
    .then((foods) => {
        res.send(response.generate(foods, null));
    })
    .catch((error) => {
        res.send(response.generate(null, error));
        logger.error('Food', error.message);
    });
});

// GET /api/kitchen/food/:id
router.get('/:id', (req, res) => {
    foodController.get(req.params.id)
    .then((food) => {
        res.send(response.generate(food, null));
    })
    .catch((error) => {
        res.send(null, error);
        logger.error('Food', error.message);
    })
});

// GET /api/kitchen/food/search
router.get('/search', (req, res) => {
    foodController.search(req.query.query)
    .then((foods) => {
        res.send(response.generate(foods, null));
    })
    .catch((error) => {
        res.send(response.generate(null, error));
        logger.error('Food', error.messsage);
    });
});

// POST /api/kitchen/food/
router.post('/', (req, res) => {
    foodController.create("DATA PLACEHOLDER") // TODO Implement
    .then(() => {
        res.send(response.generate(foods, null));
    })
    .catch((error) => {
        res.send(response.generate(null, error));
        logger.error('Food', error.message)
    })
});

// DELETE /api/kitchen/food/delete
router.delete('/:id', (req, res) => {
    foodController.delete(req.params.id)
    .then(() => {
        res.send(response.generate(null, null))
    })
    .catch((error) => {
        res.send(response.generate(null, error));
        logger.error('Food', error.message);
    })
})

module.exports = router;