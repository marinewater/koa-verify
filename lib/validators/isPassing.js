'use strict';

const _ = require( 'underscore' );

function isPassingDefaultOptions( options ) {

    if ( typeof options !== 'object' ) {
        options = {};
    }

    let defaultOptions = {
        strict: true
    };

    return _.extendOwn( defaultOptions, options );

}


/**
 *
 * @param value
 * @param {function} func
 * @param {object} [options]
 * @param {boolean} [options.strict]
 * @returns {boolean}
 */
module.exports = function isPassing( value, func, options ) {

    if ( typeof func !== 'function' ) {
        throw new TypeError( 'func needs to be a function' );
    }

    options = isPassingDefaultOptions( options );

    let valid = func( value );

    if ( options.strict === true && typeof valid !== 'boolean' ) {
        throw new TypeError( 'func needs to return a boolean in strict mode' );
    }

    return !!valid;

};