/**
 * Returns true if input is a valid subject code string for RPI
 * Source: http://catalog.rpi.edu/content.php?catoid=8&navoid=186
 * Last updated: September, 18th 2018
 *
 * @param input the course subject code
 * @returns {boolean} true if the input string is a valid RPI subject code
 */
export default function isSubjectCode(input) {
    if (typeof input !== 'string') throw new TypeError('input to must be of type string');
    return [
        'ARCH',
        'LGHT',
        'BMED',
        'CHME',
        'CIVL',
        'DSES',
        'ECSE',
        'ENGR',
        'ENVE',
        'ESCI',
        'MANE',
        'MTLE',
        'ARTS',
        'COMM',
        'IHSS',
        'LANG',
        'LITR',
        'PHIL',
        'STSH',
        'WRIT',
        'COGS',
        'ECON',
        'IHSS',
        'PSYC',
        'STSS',
        'ITEC',
        'MGMT',
        'ASTR',
        'BCBP',
        'BIOL',
        'CHEM',
        'CISH',
        'CSCI',
        'ISCI',
        'ERTH',
        'MATH',
        'MATP',
        'PHYS',
        'IENV',
        'USAF',
        'USAR',
        'USNA',
        'NSST'
    ].indexOf(input) >= 0;
}