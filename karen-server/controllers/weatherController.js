var weather = require('weather-js');
var express = require('express');
var router = express.Router();

router.use('/', (req, res) => {

});

module.exports = router;


module.exports.getWeather = function(location, cb) {
    weather.find({search: location, degreeType: 'F'}, function(err, result) {
        if(err) console.log(err);
       
        console.log(JSON.stringify(result, null, 2));
      });
};