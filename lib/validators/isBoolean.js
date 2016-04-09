'use strict';

const _ = require( 'underscore' );

function isBooleanDefaultOptions( options ) {

    if ( typeof options !== 'object' ) {
        options = {};
    }

    let defaultOptions = {
        parseString: false,
        caseSensitive: true
    };

    return _.extendOwn( defaultOptions, options );

}

/**
 * checks of the given parameter is boolean
 * @param boolean
 * @param {object} [options]
 * @param {boolean} [options.parseString=false]
 * @param {boolean} [options.caseSensitive=true]
 * @returns {boolean}
 */
module.exports = function isBoolean( boolean, options ) {

    options = isBooleanDefaultOptions( options );

    if ( options.parseString === true && typeof boolean === 'string' ) {

        boolean = options.caseSensitive ? boolean : boolean.toLowerCase();
        if ( boolean === 'true' || boolean === 'false' ) {
            return true;
        }

    }
    else {
        return typeof boolean === 'boolean';
    }

    return false;

};