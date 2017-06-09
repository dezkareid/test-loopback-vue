var app = require('../../server/server')
var expect = require('chai').expect

describe('Model/Message', function(done) {
  describe('#validateModel', function() {

    it('expect be created with valid data', function(done) {
      let data = {
        'name' : 'Joel Humberto Gómez Paredes',
        'phone' : 2281301632,
        'email' : 'elmaildeldezkareid@gmail.com',
        'topic' : 'Quiero más información',
        'comment' : 'muchas cosas wuuuuuu'
      };

      app.models.Message.create(data, function(err, res) {
        console.log(err)
        expect(err).to.be.null;
        done();
      });
    });

    it('expect not be created without name property', function(done) {
      let data = {
        'phone' : 2281301632,
        'email' : 'elmaildeldezkareid@gmail.com',
        'comment' : 'muchas cosas wuuuuuu'
      };

      app.models.Message.create(data, function(err, res) {
        expect(err).to.not.be.null;
        done();
      });
    });
  });
})