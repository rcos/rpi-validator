import isRPIEmail from '../src/isRPIEmail';
import {expect} from 'chai';

describe('isRPIEmail()', () => {
    it('should throw an error for a non-string value', () => {
        expect(() => {
            isRPIEmail(25).to.throw();
        });
    });

    it('should return false for my personal email', () => {
        expect(isRPIEmail('jake@jakebillings.com')).to.be.false;
    });


    it('should return true for my RPI email', () => {
        expect(isRPIEmail('billij@rpi.edu')).to.be.true;
    });
});