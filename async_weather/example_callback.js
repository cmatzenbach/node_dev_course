var weather = require('./weather.js');
// var location = require('./location.js');
var request = require('request');

weather(function (currentWeather) {
  console.log(currentWeather);
});

