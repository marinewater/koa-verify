var chai = require( 'chai' );
const assert = chai.assert;

const isString = require( '../../lib/validators/isString' );


describe( 'isString', function() {

    it( 'should validate a string', function() {

        assert.isTrue( isString( 'a' ) );
    } );

    it( 'should not validate with no arguments', function() {

        assert.isFalse( isString() );

    } );

    it( 'should not validate undefined', function() {

        assert.isFalse( isString( undefined ) );

    } );

    it( 'should not validate null', function() {

        assert.isFalse( isString( null ) );

    } );

    it( 'should not validate 1', function() {

        assert.isFalse( isString( 1 ) );

    } );

    it( 'should not validate 0', function() {

        assert.isFalse( isString( 0 ) );

    } );

    it( 'should not validate 0', function() {

        assert.isFalse( isString( -1 ) );

    } );

    it( 'should validate "undefined"', function() {

        assert.isTrue( isString( 'undefined' ) );

    } );

    it( 'should validate "null"', function() {

        assert.isTrue( isString( 'null' ) );

    } );

});