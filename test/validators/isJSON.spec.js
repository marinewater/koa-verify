'use strict';

var chai = require( 'chai' );
const expect = chai.expect;

const isJSON = require( '../../lib/validators/isJSON' );


describe( 'isJSON', function() {

    describe( 'no options provided', function() {

        it( 'should return true for an empty object', function() {

            expect( isJSON( {} ) ).to.be.true;

        });

        it( 'should return false for null', function() {

            expect( isJSON( null ) ).to.be.false;

        });

        it( 'should return false for an empty object in a string', function() {

            expect( isJSON( '{}' ) ).to.be.false;

        });

        it( 'should return false for an empty string', function() {

            expect( isJSON( '' ) ).to.be.false;

        });

        it( 'should return false for an array', function() {

            expect( isJSON( [] ) ).to.be.false;

        });

        it( 'should return false for a Date object', function() {

            expect( isJSON( new Date() ) ).to.be.false;

        });

    });

    describe( 'allowString', function() {

        const options = {
            allowObject: false,
            allowString: true,
            convertToObject: false
        };

        it( 'should return false for an object', function() {

            expect( isJSON( {}, options ) ).to.be.false;

        });

        it( 'should return false for an empty object in a string', function() {

            let object_string = '{}';

            expect( isJSON( object_string, options ) ).to.be.true;

        });

        it( 'should return false for an empty string', function() {

            expect( isJSON( '', options ) ).to.be.false;

        });

        it( 'should return false for an array', function() {

            expect( isJSON( [], options ) ).to.be.false;

        });

        it( 'should return true for an array in a string', function() {

            expect( isJSON( '[]', options ) ).to.be.true;

        });

        it( 'should return false for a Date object', function() {

            expect( isJSON( new Date(), options ) ).to.be.false;

        });

        it( 'should return true for a stringified Date object', function() {

            expect( isJSON( JSON.stringify( new Date() ), options ) ).to.be.true;

        });

    });

});