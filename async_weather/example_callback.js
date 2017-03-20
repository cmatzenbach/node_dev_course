var weather = require('./weather.js');
var location = require('./location.js');

weather(function (currentWeather) {
  console.log(currentWeather);
});
// request({
//     url: url,
//     json: true
//   }, 
//   function (err, res, body) {
//     if (err) {
//       console.log('Unable to fetch weather.');
//     }
//     else {
//       console.log('It\'s ' + body.main.temp + 'in ' + body.name + '!');
//     }
//   }
// });
