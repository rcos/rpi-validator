import isSubjectCode from '../src/isSubjectCode';
import {expect} from 'chai';

describe('isSubjectCode()', () => {
    it('should throw an error for a non-string value', () => {
        expect(() => {
            isSubjectCode(25).to.throw();
        });
    });

    it('should return false for FAKE', () => {
        expect(isSubjectCode('FAKE')).to.be.false;
    });


    it('should return true for computer science', () => {
        expect(isSubjectCode('CSCI')).to.be.true;
    });

    it('should return true for biomedical engineering', () => {
        expect(isSubjectCode('BMED')).to.be.true;
    });
});