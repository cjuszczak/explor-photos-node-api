// File: ./app.js

// Require express, photoAPI router, body-parser
var express    = require('express');
var photoapi   = require('./routes/photoAPI');
var bodyParser = require('body-parser');

// Declare and initialize express app and server port
var app   = express();
var port  = process.env.PORT || 8080;

// Set up routes and bodyParser
app.use(bodyParser.json());
app.use('/photoapi', photoapi);

app.get('/', function(req, res) {
	res.send("Test API");
});

// Start server
app.listen(port, function() {
	console.log('Server running on PORT: ' + port);
});
