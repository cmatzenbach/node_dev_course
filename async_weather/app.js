//var request = require('request');
//var url = 'api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=354d0f5584a91a0c9d53d67010435442';
var weather = require('./weather.js');
var location = require('./location.js');
// setup yargs
var argv = require('yargs')
  .option('location', {
    alias: '[',
    demand: false,
    describe: 'Location to fetch weather for',
    type: 'string'
  })
  .help('help')
  .argwjkk

weather(function (currentWeather) {
  console.log(currentWeather);
});

location(function(location) {
  console.log('city: ' + location.city);
  console.log('lat/lon: ' + location.loc);
});:
