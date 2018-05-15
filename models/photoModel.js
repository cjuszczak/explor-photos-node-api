// File: ./models/photoModel.js

// Require Mongoose and define schema
var mongoose = require('mongoose');
var schema   = mongoose.Schema;

var photoModelSchema = new schema({
	  id:		String,
	  title:    String,
	  lat:      Number,
	  lng:      Number,
	  file:     String,
	  camera:   String,
	  lens:     String,
	  uploaded: { type: Date, default: Date.now }
});

// Export function to create PhotoModel
module.exports = mongoose.model('PhotoModel', photoModelSchema);

