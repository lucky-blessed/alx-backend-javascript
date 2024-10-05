const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('getPaymentTokenFromAPI', function () {
    it('should return a resolved promise with correct object when success is true', function(done) {
        getPaymentTokenFromAPI(true)
        .then((Response) => {
            expect(Response).to.deep.equal({ data: 'Successful response from the API' });
            done();
        })
        .catch((error) => {
            done(error);
        });
    });
});