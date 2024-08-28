const Utils = require('./utils');

function sendPaymentRequestToApi(totlaAmount, TotalShipping) {
    const total = Utils.calculateNumber('SUM', totlaAmount, TotalShipping);
    console.log(`The total is: ${total}`);
}

module.exports = sendPaymentRequestToApi;