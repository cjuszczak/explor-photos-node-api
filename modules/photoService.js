// File: ./modules/photoService.js

// Require mongoose, connect to database, and declare/initialize data model
var mongoose = require('mongoose');
var db 	     = mongoose.connect('mongoDB://localhost/photoapi');
var photo    = require('../models/photoModel');

// List photos
exports.list = function(req, res) {
	photo.find({}, function(err, result) {
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
}

