// File: ./app.js

// Require express, photoAPI router, body-parser
let express    = require('express');
let photoapi   = require('./routes/photoAPI');
let bodyParser = require('body-parser');

// Declare and initialize express app and server port
let app   = express();
let port  = process.env.PORT || 8080;

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
