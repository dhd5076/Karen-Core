var express = require('express');
var colors = require('colors');
var response = require('../utils/response');
var userController = require('../controllers/userController');

var router = express.Router();

router.get('/', (req, res) => {
    res.render('login');
});

router.post('/', (req, res) => {
    userController.auth(req.body.username, req.body.password)
    .then((id) => {
        res.send(id)
    })
    .catch((error) =>{
        res.render('login', {error: error});
    })
});

module.exports = router;