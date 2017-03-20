var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=354d0f5584a91a0c9d53d67010435442';

module.exports = function(callback) {
  callback("Here is the current weather: ");
  request({
    url: url,
    json: true
  }, 
  function (err, res, body) {
    callback('body: ' + body);
    if (err) {
      callback('Unable to fetch weather.');
    }
    else {
      callback('It\'s ' + body.main.temp + 'in ' + body.name + '!');
    }
  });
};

