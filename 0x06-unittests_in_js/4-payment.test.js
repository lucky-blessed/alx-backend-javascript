const { expect } = require("chai");
const sinon = require('sinon');
const { Utils } = require("./utils.js");
const { sendPaymentRequestToApi } = require("./4-payment.js");


describe('sendPaymentRequestToApi', function () {
    let stub, consoleSpy;

    beforeEach(function () {
        stub = sinon.stub(Utils, 'calculateNumber').returns(10);
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(function () {
        stub.restore();
        consoleSpy.restore();
    });

    it('should call Utils.calculateNumber with SUM, 100, 20 and return 10', function () {
        sendPaymentRequestToApi(100, 20);
        expect(stub.calledOnce).to.be.true;
        expect(stub.calledWith('SUM', 100, 20)).to.be.true;
        expect(consoleSpy.calledOnce).to.be.true;
        expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
    });
});