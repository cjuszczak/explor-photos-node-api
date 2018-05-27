let chai     = require('chai');
let chaiHttp = require('chai-http');
let Photo    = require('../models/photoModel');
let app		 = require('../app');
let mongoose = require('mongoose');
let api		 = 'http://localhost:8080';

chai.use(chaiHttp);

describe('Photo API Endpoint', function (done) {
	let saved;

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
		let toSave = {
			title: "Test Photo",
			lat: 24.12345,
			lng: 45.67890
		}

		it('should return an HTTP 500 Internal Server Error', function(done) {
			chai.request(api)
				.post('/photoapi/photos')
				.send(toSave)
				.end(function(err, res){
					chai.expect(res).to.have.status(500);
					done();
				});
		});

		it('should return an HTTP 201 CREATED', function(done) {
			toSave.file = 'filename.jpeg';

			chai.request(api)
				.post('/photoapi/photos')
				.send(toSave)
				.end(function(err, res){
					chai.expect(res).to.have.status(201);
					saved = res.body;
					done();
				});
		});
	});

	describe('GET /photos/details/:photoid', function(done) {
		it('should return photo details with an HTTP 200 OK', function(done) {
			chai.request(api)
				.get('/photoapi/photos/details/' + saved._id)
				.end(function(err, res){
					chai.expect(res.body.file).to.equal(saved.file);
					chai.expect(res.body.title).to.equal(saved.title);
					chai.expect(res.body.lat).to.equal(saved.lat);
					chai.expect(res.body.lng).to.equal(saved.lng);
					chai.expect(res.body.uploaded).to.equal(saved.uploaded);
					chai.expect(res.body._id).to.equal(saved._id);
					chai.expect(res).to.have.status(200);
					done();
				});
		});

		it('should return HTTP 400 Bad Request for photo detail request without ID', function(done){
			chai.request(api)
				.get('/photoapi/photos/details/')
				.end(function(err, res){
					chai.expect(res.badRequest).to.equal(true);
					chai.expect(res).to.have.status(400);
					done();
				});
		});

		it('should return HTTP 500 Internal Server Error for photo detail request with bad ID', function(done){
			chai.request(api)
				.get('/photoapi/photos/details/a')
				.end(function(err, res){
					chai.expect(res).to.have.status(500);
					done();
				});
		});

		it('should return HTTP 404 Not Found for a photo detail request with valid ObjectId that isn\'t in the database', function(done){
			let oId = mongoose.Types.ObjectId();
		
			chai.request(api)
				.get('/photoapi/photos/details/' + oId)
				.end(function(err, res){
					chai.expect(res).to.have.status(404);
					done();
				});
		});
	});
});
