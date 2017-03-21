var weather = require('./weather.js');
var location = require('./location.js');

// setup yargs
var argv = require('yargs')
  .option('location', {
    alias: 'l',
    demand: false,
    describe: 'Location to fetch weather for',
    type: 'string'
  })
  .help('help')
  .argv;

// weather(function (currentWeather) {
//   console.log(currentWeather);
// });

// location(function(location) {
//   if (!location) {
//     console.log("Location not found");
//     return;
//   }
//   console.log('city: ' + location.city);
//   console.log('lat/lon: ' + location.loc);
// });

if (typeof argv.l === 'string' && argv.l.length > 0) {
  weather(argv.l, function(currentWeather) {
    console.log(currentWeather);
  });
}
else {
  location(function(loc) {
    weather(loc.city, function(currentWeather) {
      console.log(currentWeather);
    });
  });
}
