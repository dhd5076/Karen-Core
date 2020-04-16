var express = require('express');
var menuPlanningRouter = require('./menu-planning');
var response = require('../../utils/response');
var router = express.Router();

router.use('/menu-planning', menuPlanningRouter);

module.exports = router;