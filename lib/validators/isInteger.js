'use strict';

const _ = require( 'underscore' );

function isIntegerDefaultOptions( options ) {

    if ( typeof options !== 'object' ) {
        options = {};
    }

    let defaultOptions = {
        parseString: false
    };

    return _.extendOwn( defaultOptions, options );

}

const isNumber = require( './isNumber' );

/**
 * checks if the given parameter is an integer
 * @param integer
 * @param {object} [options]
 * @param {boolean} [options.parseString=false]
 * @returns {boolean}
 */
module.exports = function isInteger( integer, options ) {

    options = isIntegerDefaultOptions( options );

    if ( isNumber( integer ) ) {
        if ( integer % 1 === 0 ) {
            return true;
        }
    }
    else if ( options.parseString === true && typeof integer === 'string' ) {
        // parseInt silently converts floats to integers, so using parseFloat instead and checking for reminder
        integer = parseFloat( integer );

        if ( !isNaN( integer ) && integer % 1 === 0 ) {
            return true;
        }
    }

    return false;

};