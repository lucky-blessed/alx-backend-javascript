import { expect } from "chai";
import sinon from 'sinon';
import { Utils } from "./utils.js";
import { sendPaymentRequestToApi } from "./3-payment.js";

describe('sendPaymentRequestToApi', function () {
    let consoleSpy;

    beforeEach(function () {
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(function () {
        consoleSpy.restore();
    });

    it('should log the total is: 120 for 100 and 20', function () {
        sendPaymentRequestToApi(100, 20);
        expect(consoleSpy.calledOnce).to.be.true;
        expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
    });

    it('should log the total is: 20 for 10 and 10', function () {
        sendPaymentRequestToApi(10, 10);
        expect(consoleSpy.calledOnce).to.be.true;
        expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
    });
});