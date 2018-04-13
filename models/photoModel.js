var mongoose = require('mongoose');
var schema   = mongoose.Schema;

var photoModel = new schema({
	  id:		String,
	  title:    String,
	  lat:      Number,
	  lng:      Number,
	  file:     String,
	  camera:   String,
	  lens:     String,
	  uploaded: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Photo', photoModel);

