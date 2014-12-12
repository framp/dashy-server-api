'use strict';
var request = require('supertest');
var chai = require('chai');
var chaiString = require('chai-string');

var app = require('../../app');
// var dataStore = require('../../lib/dataStore').getDataStore();
// var assert = chai.assert;
request = request(app);
chai.use(chaiString);

describe('POST ~/users', function () {
  it('returns 400 bad request if email not specified', function (done) {
    request.post('/users')
      .send()
      .expect(400)
      .expect({ message : 'Property "email" missing in body' })
      .end(done);
  });
  it('returns 400 bad request if name not specified', function (done) {
    request.post('/users')
      .send({ email: 'info@example.com' })
      .expect(400)
      .expect({ message : 'Property "name" missing in body' })
      .end(done);
  });
});