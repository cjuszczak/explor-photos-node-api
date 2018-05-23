// File: ./modules/photoService.js

// Require mongoose, connect to database, and declare/initialize data model
let mongoose = require('mongoose');
let db 	     = mongoose.connect('mongoDB://localhost/photoapi');
let Photo    = require('../models/photoModel');

// List photos
exports.list = function(req, res) {
	Photo.find({}, function(err, result) {
		if(err) {
			res.set({'content-type': 'text/plain'});
			res.status(500).send('Internal server error');
		}

		if(res != null) {
			res.set({'content-type': 'application/json'});
			res.status(200).send(JSON.stringify(result));
		}

		return JSON.stringify(result);
	})
};

// Add photo to the database
exports.save = function(req, res) {
	let toSave = toPhoto(req.body, Photo);

	Photo.create(toSave, function(err, result) {
		if(err) {
			res.status(500).json(result);
		} else {
			res.set('content-type', 'application/json');
			res.status(200).json(result);
		}
		
		return;
	});
}

// Convert object to Photo
function toPhoto(req, Photo) {
	return model = new Photo({
		title:  req.title,
		lat:    req.lat,
		lng:    req.lng,
		file:   req.file,
		camera: req.camera,
		lens:   req.lens
	});
};

