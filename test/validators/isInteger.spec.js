var chai = require( 'chai' );
const assert = chai.assert;

const isInteger = require( '../../lib/validators/isInteger' );

describe( 'isInteger', function() {

    describe( 'default options', function() {

        it( 'should return true for 1', function() {

            assert.isTrue( isInteger( 1 ) );

        });

        it( 'should return true for 0', function() {

            assert.isTrue( isInteger( 0 ) );

        });

        it( 'should return true for -1', function() {

            assert.isTrue( isInteger( -1 ) );

        });

        it( 'should return false for 0.1', function() {

            assert.isFalse( isInteger( 0.1 ) );

        });

        it( 'should return false for -0.1', function() {

            assert.isFalse( isInteger( -0.1 ) );
        });

        it( 'should return false for "0"', function() {

            assert.isFalse( isInteger( '0' ) );

        });

        it( 'should return false for "1"', function() {

            assert.isFalse( isInteger( '1' ) );

        });

        it( 'should return false for "-1"', function() {

            assert.isFalse( isInteger( '-1' ) );

        });

        it( 'should return false for "0.1"', function() {

            assert.isFalse( isInteger( '0.1' ) );

        });

        it( 'should return false for "-0.1"', function() {

            assert.isFalse( isInteger( '-0.1' ) );

        });

        it( 'should return false for true', function() {

            assert.isFalse( isInteger( true ) );

        });

        it( 'should return false for false', function() {

            assert.isFalse( isInteger( false ) );

        });

        it( 'should return false for null', function() {

            assert.isFalse( isInteger( null ) );

        });

        it( 'should return false for undefined', function() {

            assert.isFalse( isInteger( undefined ) );

        });

        it( 'should return false for no argument', function() {

            assert.isFalse( isInteger() );

        });

    });

    describe( 'parse string', function() {

        const options = {
            parseString: true
        };

        it( 'should return true for 1', function() {

            assert.isTrue( isInteger( 1, options ) );

        });

        it( 'should return true for 0', function() {

            assert.isTrue( isInteger( 0, options ) );

        });

        it( 'should return true for -1', function() {

            assert.isTrue( isInteger( -1, options ) );

        });

        it( 'should return false for 0.1', function() {

            assert.isFalse( isInteger( 0.1, options ) );

        });

        it( 'should return false for -0.1', function() {

            assert.isFalse( isInteger( -0.1, options ) );

        });

        it( 'should return true for "0"', function() {

            assert.isTrue( isInteger( '0', options ) );

        });

        it( 'should return true for "1"', function() {

            assert.isTrue( isInteger( '1', options ) );

        });

        it( 'should return true for "-1"', function() {

            assert.isTrue( isInteger( '-1', options ) );

        });

        it( 'should return false for "0.1"', function() {

            assert.isFalse( isInteger( '0.1', options ) );

        });

        it( 'should return false for "-0.1"', function() {

            assert.isFalse( isInteger( '-0.1', options ) );

        });

        it( 'should return false for true', function() {

            assert.isFalse( isInteger( true, options ) );

        });

        it( 'should return false for false', function() {

            assert.isFalse( isInteger( false, options ) );

        });

        it( 'should return false for null', function() {

            assert.isFalse( isInteger( null, options ) );

        });

        it( 'should return false for undefined', function() {

            assert.isFalse( isInteger( undefined, options ) );

        });

    });

});