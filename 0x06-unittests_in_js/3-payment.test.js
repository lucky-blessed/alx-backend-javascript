const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
    let spy;
    beforeEach(() => {
        spy = sinon.spy(Utils, 'calculateNumber');
    });
    afterEach(() => {
        spy.restore();
    });
    it('should call Utils.calculateNumber with SUM and the correct arguments', () => {
        sendPaymentRequestToApi(100, 20);
        expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    });
});