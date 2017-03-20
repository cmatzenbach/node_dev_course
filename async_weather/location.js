var request = require('request'); 
var url = 'http://ipinfo.io';
// var u_loc;

module.exports = function(callback) {
  // make request to url for json
  request({
    url: url,
    json: true
  },
  function (err, res, body) {
  // if error, callback
  // else callback(body)f
    if (err) {
      callback();
    } 
    else {
      callback(body);
    }
  });
};
