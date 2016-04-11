'use strict';

const isNumber = require( './isNumber' );

/**
 * checks if the given parameter is an integer
 * @param integer
 * @returns {boolean}
 */
module.exports = function isInteger( integer ) {

    if ( isNumber( integer ) ) {
        if ( integer % 1 === 0 ) {
            return true;
        }
    }

    return false;

};