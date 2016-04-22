'use strict';

const Validator = require( './validator' );

module.exports = function( options ) {

    /**
     * validates the key element of a query object
     * @param key
     * @returns {Validator}
     */
    return function checkQuery( key ) {

        let query = this.request.query;

        if ( typeof query !== 'object' ) {
            throw 'query has to be an object';
        }

        options.parseString = true;
        options.convert = true;

        return new Validator( key, query[ key ], query, this, options );

    };

};