const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentToApi = require('./4-payment');
const { expect } = require('chai');

describe('sendPaymentToApi', () => {
    let stub;
    let spy;
    beforeEach(() => {
        stub = sinon.stub(Utils, 'calculateNumber').returns(10);
        spy = sinon.spy(console, 'log');
    });
    afterEach(() => {
        stub.restore();
        spy.restore();
    });
    it('should call Utils.calculateNumber with SUM and the correct arguments', () => {
        sendPaymentToApi(100, 20);
        expect(stub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    });
    it('should log the correct message', () => {
        sendPaymentToApi(100, 20);
        expect(spy.calledOnceWithExactly('The total is: 10')).to.be.true;
    });
});