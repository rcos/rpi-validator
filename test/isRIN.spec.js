import isRIN from '../src/isRIN';
import {expect} from 'chai';

describe('isRIN()', () => {
    it('should throw an error for a non-string value', () => {
        expect(() => {
            isRIN(25).to.throw();
        });
    });

    it('should return false for an eleven digit decimal number as a string', () => {
        expect(isRIN('66286682922')).to.be.true;
    });

    it('should return true for a ten digit decimal number as a string', () => {
        expect(isRIN('6628668292')).to.be.true;
    });
});