const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentToApi = require('./5-payment');
const { expect } = require('chai');

describe('sendPaymentToApi', () => {
    let spy;
    beforeEach(() => {
        spy = sinon.spy(console, 'log');
    });
    afterEach(() => {
        spy.restore();
    });
    it('should log "The totak is: 120" when called with 100 and 20', () => {
        sendPaymentToApi(100, 20);
        expect(spy.calledOnceWithExactly('The total is: 120')).to.be.true;
    });
    it('should log "The total is: 20" when called woth 10 and 10', () => {
        sendPaymentToApi(10, 10);
        expect(spy.calledOnceWithExactly('The total is: 20')).to.be.true;
    });
});