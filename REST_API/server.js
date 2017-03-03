// modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Bear = require('./app/models/bear');

// database
mongoose.connect('mongodb://dev:devkennwort@ds159978.mlab.com:59978/node-api');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// configure app to use bodyParser, which gets data from $POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set port
var port = process.env.PORT || 8080;


// ROUTES FOR API
// gets instance of express router
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
  console.log('Something is happening');
  next();
});

// test route
router.get('/', function(req, res) {
  res.json({ message: 'rebellions are built on APIs' });
});

// more routes will happen here
// on routes that end in /bears
router.route('/bears').post(function(req, res) {
  // create new instance of bear model and set bears name from req
  var bear = new Bear();
  bear.name = req.body.name;

  // save the bear and check for errors
  bear.save(function(err) {
    if (err) res.send('yup its here: ' + err);
    res.json({ message: 'Bear created!' });
  });
});

// REGISTER ROUTES
// all our routes are prefixed with /api
app.use('/api', router);


// START SERVER
app.listen(port);
console.log('Shes up and runnin on port ' + port);
