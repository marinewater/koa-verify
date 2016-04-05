'use strict';

const _ = require( 'underscore' );

function isNullDefaultOptions( options ) {

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
 * checks if the given parameter is null
 * @param _null
 * @param {object} [options]
 * @param {boolean} [options.parseString=false]
 * @param {boolean} [options.caseSensitive=true]
 * @returns {boolean}
 */
module.exports = function isNull( _null, options ) {

    options = isNullDefaultOptions( options );

    if ( _null === null ) {
        return true;
    }

    if ( options.parseString === true && typeof _null === 'string' ) {

        _null = options.caseSensitive === true ? _null : _null.toLowerCase();
        if ( _null === 'null' ) {
            return true;
        }

    }

    return false;

};