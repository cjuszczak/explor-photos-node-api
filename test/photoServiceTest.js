let chai     = require('chai');
let chaiHttp = require('chai-http');
let app      = require('../app');

chai.use(chaiHttp);

describe('Photo API Endpoint /photos', function (done) {
	it('should return an non-empty json object', function(done) {
		chai.request('http://localhost:8080')
			.get('/photoapi/photos')
			.end(function(err, res) {
				chai.expect(res).to.have.status(200);
				chai.expect(res.body.length).to.equal(1);

				done();
			});
	});
});
