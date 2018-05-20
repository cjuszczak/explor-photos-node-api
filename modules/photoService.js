// File: ./modules/photoService.js

// Require mongoose, connect to database, and declare/initialize data model
var mongoose = require('mongoose');
var db 	     = mongoose.connect('mongoDB://localhost/photoapi');
let Photo    = require('../models/photoModel');

// List photos
exports.list = function(req, res) {
	Photo.find({}, function(err, result) {
		if(err) {
			console.error(err);
			return null;
		}

		if(res != null) {
			res.setHeader('content-type', 'application/json');
			res.status(200).send(JSON.stringify(result));
		}

		return JSON.stringify(result);
	})
};

// Add photo to the database
exports.save = function(req, res) {
	let toSave = toPhoto(req.body);

	Photo.create(toSave, function(err, result) {
		if(err) {
			console.error(err);
		}

		if(res != null) {
			res.setHeader('content-type', 'application/json');
			res.status(200).send('Photo saved to database');
		}
		
		return;
	});
}

// Convert object to Photo
function toPhoto(req, Photo) {
	var model = new Photo({
		title:  req.title,
		lat:    req.lat,
		lng:    req.lng,
		file:   req.file,
		camera: req.camera,
		lens:   req.lens
	});

	return model;
};

