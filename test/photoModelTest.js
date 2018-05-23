let chai     = require('chai');
let Photo    = require('../models/photoModel')
let app      = require('../app');

describe('Photo model', function(done) {
    it('should be invalid if title/lat/lng/file is empty', function(done) {
        let model = new Photo();

        model.validate(function(err) {
            chai.expect(err.errors.title).to.exist;
            chai.expect(err.errors.lat).to.exist;
            chai.expect(err.errors.lng).to.exist;
            chai.expect(err.errors.file).to.exist;

            done();
        });
    });

    it('should be valid if title/lat/lng/file is not empty', function(done) {
        let model = new Photo({
            title: "Test Photo",
            lat: 24.12345,
            lng: 45.67890,
            file: "testfile.jpg"
        });

        model.validate(function(err) {
            chai.expect(err).to.be.null;

            done();
        });
    });
});