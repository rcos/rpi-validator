import isCRN from '../src/isCRN';
import {expect} from 'chai';

describe('isCRN()', () => {
    it('should throw an error for a non-string value', () => {
        expect(() => {
            isCRN(25).to.throw();
        });
    });

    it('should return false for an eleven digit decimal number as a string', () => {
        expect(isCRN('66286682922')).to.be.false;
    });


    it('should return false for an nine digit decimal number as a string', () => {
        expect(isCRN('662866829')).to.be.false;
    });

    it('should return true for a five digit decimal number as a string', () => {
        expect(isCRN('65025')).to.be.true;
    });
});