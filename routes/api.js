
// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Product = require('../models/scans');

// Routes
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/scanner');



// Return router
module.exports = router;
