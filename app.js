var express  = require('express');
var mongoose = require('mongoose');

var db    = mongoose.connect('mongoDB://localhost/photoapi');
var photo = require('./models/photoModel');
var app   = express();
var port  = process.env.PORT || 8080;

var router = express.Router();

router.route('/camera')
	.get(function(req, res) {
		var query = {};
		
		if(req.query.camera)
		{
			query.camera = req.query.camera;
		}

		photo.find(query, function(err, photos) {
			if(err)
				res.status(500).send(err);
			else
				res.json(photos);
		});
	})
	.post(function(req,res) {
	
	});

app.use('/photos', router);

app.get('/', function(req, res) {
	res.send("Test API");
});

app.listen(port, function() {
	console.log('Server running on PORT: ' + port);
});
