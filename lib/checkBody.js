'use strict';

const Validator = require( './validator' );

module.exports = function( options ) {

    /**
     * validates the key element of a koa-body object
     * @param key
     * @returns {Validator}
     */
    return function checkBody( key ) {

        let body = this.request.body;

        if ( typeof body !== 'object' ) {
            throw 'body has to be an object';
        }

        body = body.fields || body;

        return new Validator( key, body[ key ], this );

    };

};