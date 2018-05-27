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

// Catch requests that were not properly routed
app.all('*', function(req, res) {
	res.header({'content-type': 'text/plain'});
	res.status(400).send('Bad Request');	
})

// Start server
app.listen(port, function() {
	console.log('Server running on PORT: ' + port);
});
