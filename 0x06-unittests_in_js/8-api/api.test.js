const request = require('request');
const { expect } = require('chai');
const server = require('./api.js'); // Import the server

describe('Index page', () => {
    after(() => {
        // Close the server after tests
        server.close();
    });

    it('should return status code 200', (done) => {
        request.get('http://localhost:7865', (err, res) => {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    it('should return the correct message', (done) => {
        request.get('http://localhost:7865', (err, res) => {
            expect(res.body).to.equal('Welcome to the payment system');
            done();
        });
    });
});