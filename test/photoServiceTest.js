let chai     = require('chai');
let chaiHttp = require('chai-http');
let app      = require('../app');
let assert   = require('assert');
let mongoose = require('mongoose');
let model    = require('../models/photoModel')
let photosvc = require('../modules/photoService');


chai.use(chaiHttp);

describe('/photoapi/photos/GET photos', function() {
	it('should return an empty json object', function() {
		chai.request('http://localhost:8080')
			.get('/photoapi/photos')
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a('array');
				res.body.length.should.be.eql(0);
				done();
			});	
	});
});

