import isISO from '../src/isISO';
import {expect} from 'chai';

describe('isISO()', () => {
    it('should throw an error for a non-string value', () => {
        expect(() => {
            isISO(25).to.throw();
        });
    });

    it('should return false for an eighteen digit decimal number as a string', () => {
        expect(isISO('354382200212333472')).to.be.false;
    });

    it('should return true for a seventeen digit decimal number as a string', () => {
        expect(isISO('35438220021233347')).to.be.true;
    });
});