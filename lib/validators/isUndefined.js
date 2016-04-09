'use strict';

const _ = require( 'underscore' );

function isUndefinedDefaultOptions( options ) {

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
 * checks if the given parameter is undefined
 * @param _undefined
 * @param {object} [options]
 * @returns {boolean}
 */
module.exports = function isUndefined( _undefined, options ) {

    options = isUndefinedDefaultOptions( options );

    if ( options.parseString === true && typeof _undefined === 'string' ) {

        _undefined = options.caseSensitive ? _undefined : _undefined.toLowerCase();
        if ( _undefined === 'undefined' ) {
            return true;
        }

    }
    else {
        return typeof _undefined === 'undefined';
    }

    return false;

};