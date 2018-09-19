/**
 * Returns true if an input is a string Rensselaer Identification Number (RIN)
 * This is a ten digit decimal number found on a student id
 *
 * @param input
 * @returns {boolean}
 */
export default function isRIN(input) {
    if (typeof input !== 'string') throw new TypeError('input to must be of type string');
    return /^\d{10}$/.test(input);
}