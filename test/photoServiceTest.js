let chai     = require('chai');
let chaiHttp = require('chai-http');
let Photo    = require('../models/photoModel');
let api		 = 'http://localhost:8080';

chai.use(chaiHttp);

describe('Photo API Endpoint', function (done) {
	describe('GET /photos', function(done){
		it('should return an HTTP 200 OK', function(done) {
			chai.request(api)
				.get('/photoapi/photos')
				.end(function(err, res) {
					chai.expect(res).to.have.status(200);
					done();
				});
		});
	})

	describe('POST /photos', function(done){
		var toSave = {
			title: "Test Photo",
			lat: 24.12345,
			lng: 45.67890
		};

		it('should return an HTTP 500 Internal Server Error', function(done) {
			chai.request(api)
				.post('/photoapi/photos')
				.send(toSave)
				.end(function(err, res){
					chai.expect(res).to.have.status(500);
					done();
				});
		});

		it('should return an HTTP 200 OK', function(done) {
			toSave.file = 'filename.jpeg';

			chai.request(api)
				.post('/photoapi/photos')
				.send(toSave)
				.end(function(err, res){
					chai.expect(res).to.have.status(200);
					done();
				})
		});
	})
});
