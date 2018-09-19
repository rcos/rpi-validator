/**
 * Returns true if an input is a string RPI email
 * All faculty, students, and admin have RPI emails E.g. billij@rpi.edu
 *
 * @param input a string for validation
 * @returns {boolean} true if the string is an RPI email
 */
export default function isRIN(input) {
    if (typeof input !== 'string') throw new TypeError('input to must be of type string');
    return /^[\dA-Za-z]*@rpi.edu$/.test(input);
}