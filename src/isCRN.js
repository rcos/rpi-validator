/**
 * Returns true if an input is an SIS CRN number
 * This is a 5 digit decimal number found in the course catalog
 *
 * @param input the input string to be tested
 * @returns {boolean} true if the value is an SIS CRN number
 */
export default function isCRN(input) {
    if (typeof input !== 'string') throw new TypeError('input to must be of type string');
    return /^\d{5}$/.test(input);
}