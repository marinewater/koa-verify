'use strict';

var chai = require( 'chai' );
const assert = chai.assert;

const isJSON = require( '../../lib/validators/isJSON' );


describe( 'isJSON', function() {

    describe( 'no options provided', function() {

        it( 'should return true for an empty object', function() {

            assert.isTrue( isJSON( {} ) );

        });

        it( 'should return false for null', function() {

            assert.isFalse( isJSON( null ) );

        });

        it( 'should return false for an empty object in a string', function() {

            assert.isFalse( isJSON( '{}' ) );

        });

        it( 'should return false for an empty string', function() {

            assert.isFalse( isJSON( '' ) );

        });

        it( 'should return false for an array', function() {

            assert.isFalse( isJSON( [] ) );

        });

        it( 'should return false for a Date object', function() {

            assert.isFalse( isJSON( new Date() ) );

        });

    });

    describe( 'allowString', function() {

        const options = {
            allowObject: false,
            allowString: true,
            convertToObject: false
        };

        it( 'should return false for an object', function() {

            assert.isFalse( isJSON( {}, options ) );

        });

        it( 'should return false for an empty object in a string', function() {

            assert.isTrue( isJSON( '{}', options ) );

        });

        it( 'should return false for an empty string', function() {

            assert.isFalse( isJSON( '', options ) );

        });

        it( 'should return false for an array', function() {

            assert.isFalse( isJSON( [], options ) );

        });

        it( 'should return true for an array in a string', function() {

            assert.isTrue( isJSON( '[]', options ) );

        });

        it( 'should return false for a Date object', function() {

            assert.isFalse( isJSON( new Date(), options ) );

        });

        it( 'should return true for a stringified Date object', function() {

            assert.isTrue( isJSON( JSON.stringify( new Date() ), options ) );

        });

    });

});