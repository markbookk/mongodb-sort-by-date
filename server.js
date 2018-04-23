
/**
 * Module dependencies.
 */
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
// var routes = require('./routes');
// var user = require('./routes/api');
var http = require('http');
var path = require('path');
var fs = require('fs');

//Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//MongoDB
mongoose.connect('mongodb://localhost/testibooo');

//load all files in models dir
fs.readdirSync(__dirname + '/models').forEach(function(filename) {
  if (~filename.indexOf('.js')) require(__dirname + '/models/' + filename)
});

var A = mongoose.model('Scans');


app.get('/api/getScans', function(req, res) {
  // console.log(req.query.start);
  // console.log(req.query.end);
  if (req.query.start != undefined) {
    A.find({
      timeScanned: {
        $gte: req.query.start,
        $lte: req.query.end

    }}, function (err, docs) {
        res.send(docs);
      });
  }else {
    A.find(function(err, data) {
      res.send(data);
    });
  }

});

//API
// Routes
app.use('/api', require('./routes/api'));


// Start server
app.listen(3000);
console.log('API is running on port 3000');
