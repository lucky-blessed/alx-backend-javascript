import { expect } from 'chai';
import { calculateNumber } from './2-calcul_chai.js';

describe('calculateNumber', () => {
    it('should return 6 when type is SUM, a = 1.4, b = 4.5', () => {
        expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return -4 when type is SUBTRACT, a 1.4, b = 4.5', () => {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return 0.2 when type is DIVIDE and a = 1.4, b = 4.5', () => {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when type is DIVIDE and a=1.4, b = 0', () => {
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return 0 when type is SUM and both a and b are 0.4', () => {
        expect(calculateNumber('SUM', 0.4, 0.4)).to.equal(0);
    });

    it('should return "Error" when type is DIVIDE and a = 1.5, b = 0.4', () => {
        expect(calculateNumber('DIVIDE', 1.5, 0.4)).to.equal('Error');
    });
});