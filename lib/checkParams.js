'use strict';

const Validator = require( './validator' );

module.exports = function( options ) {

    /**
     * validates the key element of a params object
     * @param key
     * @returns {Validator}
     */
    return function checkParams( key ) {

        let params = this.params;

        if ( typeof params !== 'object' ) {
            throw 'params has to be an object';
        }

        options.parseString = true;

        return new Validator( key, params[ key ], params, this, options );

    };

};