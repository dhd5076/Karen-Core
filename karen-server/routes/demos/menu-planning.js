var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('demos/menu-planning');
}); 

module.exports = router;