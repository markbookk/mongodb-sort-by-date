
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var productSchema = new mongoose.Schema({
    timeScanned: String,
    isCheckIn: Boolean,
    project: String,
    scanCode: String,
    Latitude: Number,
    Longitude: Number,
    isManual: Boolean,
});

// Return model
module.exports = restful.model('Scans', productSchema);
