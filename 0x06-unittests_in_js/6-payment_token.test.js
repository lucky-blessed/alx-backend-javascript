const { response } = require('express');
const getPaymentTokenFromApi = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromApi', () => {
    it('should resolve with the correct data when success is true', (done) => {
        .then(response => {
            expect(response).to.deep.equal({ data: 'Successful response from the API'});
            done();
        })
        .catch(done);
    });
    it('should not resolve or reject when success is false', (done) => {
        getPaymentTokenFromApi(false)
        .then(response => {
            done(new Error('Expected function to not resolve or reject'));
        })
        .catch(done);
    });
});