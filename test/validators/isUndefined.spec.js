var chai = require( 'chai' );
const assert = chai.assert;

const isUndefined = require( '../../lib/validators/isUndefined' );


describe( 'isUndefined', function() {

    describe( 'default options', function() {

        it( 'should return false for true', function() {

            assert.isFalse( isUndefined( true ) );

        });

        it( 'should return false for false', function() {

            assert.isFalse( isUndefined( false ) );

        });

        it( 'should return false for null', function() {

            assert.isFalse( isUndefined( null ) );

        });

        it( 'should return true for no argument', function() {

            assert.isTrue( isUndefined() );

        });

        it( 'should return true for undefined', function() {

            assert.isTrue( isUndefined( undefined ) );

        });

        it( 'should return false for "undefined"', function() {

            assert.isFalse( isUndefined( 'undefined' ) );

        });

        it( 'should return false for "UNDEFINED"', function() {

            assert.isFalse( isUndefined( 'UNDEFINED' ) );

        });

        it( 'should return false for 1', function() {

            assert.isFalse( isUndefined( 1 ) );

        });

        it( 'should return false for 0', function() {

            assert.isFalse( isUndefined( 0 ) );

        });

        it( 'should return false for -1', function() {

            assert.isFalse( isUndefined( -1 ) );

        });

        it( 'should return false for an empty string', function() {

            assert.isFalse( isUndefined( '' ) );

        });

        it( 'should return false for a string', function() {

            assert.isFalse( isUndefined( 'a' ) );

        });

        it( 'should return false for "true"', function() {

            assert.isFalse( isUndefined( 'true' ) );

        });

        it( 'should return false for "false"', function() {

            assert.isFalse( isUndefined( 'false' ) );

        });

    });

    describe( 'parse string', function() {

        const options = {
            parseString: true
        };

        it( 'should return false for true', function() {

            assert.isFalse( isUndefined( true, options ) );

        });

        it( 'should return false for false', function() {

            assert.isFalse( isUndefined( false, options ) );

        });

        it( 'should return false for null', function() {

            assert.isFalse( isUndefined( null, options ) );

        });

        it( 'should return true for undefined', function() {

            assert.isTrue( isUndefined( undefined, options ) );

        });

        it( 'should return true for "undefined"', function() {

            assert.isTrue( isUndefined( 'undefined', options ) );

        });

        it( 'should return false for "UNDEFINED"', function() {

            assert.isFalse( isUndefined( 'UNDEFINED', options ) );

        });

        it( 'should return false for 1', function() {

            assert.isFalse( isUndefined( 1, options ) );

        });

        it( 'should return false for 0', function() {

            assert.isFalse( isUndefined( 0, options ) );

        });

        it( 'should return false for -1', function() {

            assert.isFalse( isUndefined( -1, options ) );

        });

        it( 'should return false for an empty string', function() {

            assert.isFalse( isUndefined( '', options ) );

        });

        it( 'should return false for a string', function() {

            assert.isFalse( isUndefined( 'a', options ) );

        });

        it( 'should return false for "true"', function() {

            assert.isFalse( isUndefined( 'true', options ) );

        });

        it( 'should return false for "false"', function() {

            assert.isFalse( isUndefined( 'false', options ) );

        });

    });

    describe( 'case insensitive', function() {

        const options = {
            parseString: true,
            caseSensitive: false
        };

        it( 'should return false for true', function() {

            assert.isFalse( isUndefined( true, options ) );

        });

        it( 'should return false for false', function() {

            assert.isFalse( isUndefined( false, options ) );

        });

        it( 'should return false for null', function() {

            assert.isFalse( isUndefined( null, options ) );

        });

        it( 'should return true for undefined', function() {

            assert.isTrue( isUndefined( undefined, options ) );

        });

        it( 'should return true for "undefined"', function() {

            assert.isTrue( isUndefined( 'undefined', options ) );

        });

        it( 'should return true for "UNDEFINED"', function() {

            assert.isTrue( isUndefined( 'UNDEFINED', options ) );

        });

        it( 'should return false for 1', function() {

            assert.isFalse( isUndefined( 1, options ) );

        });

        it( 'should return false for 0', function() {

            assert.isFalse( isUndefined( 0, options ) );

        });

        it( 'should return false for -1', function() {

            assert.isFalse( isUndefined( -1, options ) );

        });

        it( 'should return false for an empty string', function() {

            assert.isFalse( isUndefined( '', options ) );

        });

        it( 'should return false for a string', function() {

            assert.isFalse( isUndefined( 'a', options ) );

        });

        it( 'should return false for "true"', function() {

            assert.isFalse( isUndefined( 'true', options ) );

        });

        it( 'should return false for "false"', function() {

            assert.isFalse( isUndefined( 'false', options ) );

        });

    });

});