'use strict';

const _ = require( 'underscore' );

module.exports = function( options ) {

    if ( typeof options !== 'object' ) {
        options = {};
    }

    let defaultOptions = {
        parseString: false,
        caseSensitive: true
    };

    return _.extendOwn( defaultOptions, options );

};