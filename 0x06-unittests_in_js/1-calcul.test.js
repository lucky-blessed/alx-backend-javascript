const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    it('should return 6 when type is SUM, a = 1.4, b = 4.5', () => {
        assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return -4 when type is SUBTRACT, a 1.4, b = 4.5', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 0.2 when type is DIVIDE and a = 1.4, b = 4.5', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when type is DIVIDE and a=1.4, b = 0', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should return 0 when type is SUM and both a and b are 0.4', () => {
        assert.strictEqual(calculateNumber('SUM', 0.4, 0.4), 0);
    });

    it('should return "Error" when type is DIVIDE and a = 1.5, b = 0.4', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.5, 0.4), 'Error');
    });
});