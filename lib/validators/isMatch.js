'use strict';

/**
 * checks a given string against a regular expression
 * @param string
 * @param {RegExp} regex
 * @returns {boolean}
 */
module.exports = function isMatch( string, regex ) {

    if ( !( regex instanceof RegExp ) ) {
        throw {
            message: '"regex" is not a valid regular expression',
            id: 'invalid_regex'
        }
    }

    if ( typeof string === 'string' ) {
        if ( string.match( regex ) ) {
            return true;
        }
    }

    return false;

};