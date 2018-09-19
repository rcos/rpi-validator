/**
 * Returns true if an input is a student ISO number
 * This is a 17 digit decimal number found on a student id
 *
 * @param input the input string to be tested
 * @returns {boolean} true if the value is an ISO number
 */
export default function isISO(input) {
    if (typeof input !== 'string') throw new TypeError('input to must be of type string');
    return /^\d{17}$/.test(input);
}