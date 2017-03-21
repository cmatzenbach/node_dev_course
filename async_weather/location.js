var request = require('request'); 
var url = 'http://ipinfo.io';

module.exports = function(callback) {
  // make request to ipinfo, then feed ip to callback
  request({
    url: url,
    json: true
  },
  function (err, res, body) {
    if (err) {
      callback();
    } 
    else {
      callback(body);
    }
  });
};
