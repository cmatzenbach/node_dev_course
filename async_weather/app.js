var weather = require('./weather.js');
var location = require('./location.js');

// setup yargs
// var argv = require('yargs')
//   .option('location', {
//     alias: '[',
//     demand: false,
//     describe: 'Location to fetch weather for',
//     type: 'string'
//   })
//   .help('help')

weather(function (currentWeather) {
  console.log(currentWeather);
});

location(function(location) {
  if (!location) {
    console.log("Location not found");
    return;
  }
  console.log('city: ' + location.city);
  console.log('lat/lon: ' + location.loc);
});

weather(function(argv, currentWeather) {
  if (argv) {
    weather(argv, currentWeather);
  }
  else {
    argv = location(location);
    weather(argv, currentWeather);
  }
})
