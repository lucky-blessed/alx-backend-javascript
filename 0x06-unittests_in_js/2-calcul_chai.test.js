const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
    it('should return 6 when type is SUM and a = 1.4, b = 4.5', () => {
        expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
    it('should return -4 when type is SUBTRACT and a = 1.4, b = 4.5', () => {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
    it('should return 0.2 when type is DIVIDE and a = 1.4, b = 4.5', () => {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
    it("should return 'Error' when type is DIVIDE and a = 1.4, b = 0", () => {
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
    it("should return 'Invalid type' for invalid operation type", () => {
        expect(calculateNumber('MULTIPLY', 1.4, 4.5)).to.equal('Invalid type');
    });
});