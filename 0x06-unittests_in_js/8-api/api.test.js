const request = require('request');
const { expect } = require('chai');
const app = require('./api');

describe('Index Page', () => {
  const url = 'http://localhost:7865/';

  it('should return status 200', (done) => {
    request.get(url, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message', (done) => {
    request.get(url, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should have the correct content type', (done) => {
    request.get(url, (error, response, body) => {
      expect(response.headers['content-type']).to.contain('text/html');
      done();
    });
  });
});