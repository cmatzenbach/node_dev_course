var request = require('request');

module.exports = function(location, callback) {
  encodeURIComponent(location);
  if (!location) {
    return callback('No location provided');
  }
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=imperial&APPID=354d0f5584a91a0c9d53d67010435442';
  request(
    {
      url: url,
      json: true
    }, 
    function (err, res, body) {
      if (err) {
        callback('Unable to fetch weather.');
      }
      else {
        callback('It\'s ' + body.main.temp + ' in ' + body.name + '!');
      }
    }
  );
};

