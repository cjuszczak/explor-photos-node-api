// File: ./models/photoModel.js

// Require Mongoose and define schema
var mongoose = require('mongoose');
var schema   = mongoose.Schema;

var photoModelSchema = new schema({
	  title:    { type: String, required: true },
	  lat:      { type: Number, required: true },
	  lng:      { type: Number, required: true },
	  file:     { type: String, required: true },
	  camera:   { type: String, required: false },
	  lens:     { type: String, required: false },
	  uploaded: { type: Date, default: Date.now }
});

// Export function to create Photo
module.exports = mongoose.model('Photo', photoModelSchema);

