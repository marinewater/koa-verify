'use strict';

const defaultOptions = require( './defaultOptions' );
const checkBody = require( './checkBody' );

module.exports = function( options ) {

    options = defaultOptions( options );

    /**
     * koa middleware that adds validation methods to koa's this
     * @param next
     */
    return function*( next ) {

        this.checkBody = checkBody( options );

        yield next;

    };

};