var chai = require( 'chai' );
const assert = chai.assert;

const isBoolean = require( '../../lib/validators/isBoolean' );


describe( 'isBoolean', function() {

    describe( 'default options', function() {

        it( 'should return true for true', function() {

            assert.isTrue( isBoolean( true ) );

        });

        it( 'should return true for false', function() {

            assert.isTrue( isBoolean( false ) );

        });

        it( 'should return false for null', function() {

            assert.isFalse( isBoolean( null ) );

        });

        it( 'should return false for no argument', function() {

            assert.isFalse( isBoolean() );

        });

        it( 'should return false for undefined', function() {

            assert.isFalse( isBoolean( undefined ) );

        });

        it( 'should return false for 1', function() {

            assert.isFalse( isBoolean( 1 ) );

        });

        it( 'should return false for 0', function() {

            assert.isFalse( isBoolean( 0 ) );

        });

        it( 'should return false for -1', function() {

            assert.isFalse( isBoolean( -1 ) );

        });

        it( 'should return false for an empty string', function() {

            assert.isFalse( isBoolean( '' ) );

        });

        it( 'should return false for a string', function() {

            assert.isFalse( isBoolean( 'a' ) );

        });

        it( 'should return false for "true"', function() {

            assert.isFalse( isBoolean( 'true' ) );

        });

        it( 'should return false for "false"', function() {

            assert.isFalse( isBoolean( 'false' ) );

        });

    });

    describe( 'parseString', function() {

        const options = {
            parseString: true
        };

        it( 'should return true for true', function() {

            assert.isTrue( isBoolean( true, options ) );

        });

        it( 'should return true for false', function() {

            assert.isTrue( isBoolean( false, options ) );

        });

        it( 'should return false for null', function() {

            assert.isFalse( isBoolean( null, options ) );

        });

        it( 'should return false for undefined', function() {

            assert.isFalse( isBoolean( undefined, options ) );

        });

        it( 'should return false for 1', function() {

            assert.isFalse( isBoolean( 1, options ) );

        });

        it( 'should return false for 0', function() {

            assert.isFalse( isBoolean( 0, options ) );

        });

        it( 'should return false for -1', function() {

            assert.isFalse( isBoolean( -1, options ) );

        });

        it( 'should return false for an empty string', function() {

            assert.isFalse( isBoolean( '', options ) );

        });

        it( 'should return false for a string', function() {

            assert.isFalse( isBoolean( 'a', options ) );

        });

        it( 'should return true for "true"', function() {

            assert.isTrue( isBoolean( 'true', options ) );

        });

        it( 'should return true for "false"', function() {

            assert.isTrue( isBoolean( 'false', options ) );

        });

        it( 'should return false for "TRUE"', function() {

            assert.isFalse( isBoolean( 'TRUE', options ) );

        });

        it( 'should return false for "FALSE"', function() {

            assert.isFalse( isBoolean( 'FALSE', options ) );

        });

    });

    describe( 'case insensitive', function() {

        const options = {
            parseString: true,
            caseSensitive: false
        };

        it( 'should return true for true', function() {

            assert.isTrue( isBoolean( true, options ) );

        });

        it( 'should return true for false', function() {

            assert.isTrue( isBoolean( false, options ) );

        });

        it( 'should return false for null', function() {

            assert.isFalse( isBoolean( null, options ) );

        });

        it( 'should return false for undefined', function() {

            assert.isFalse( isBoolean( undefined, options ) );

        });

        it( 'should return false for 1', function() {

            assert.isFalse( isBoolean( 1, options ) );

        });

        it( 'should return false for 0', function() {

            assert.isFalse( isBoolean( 0, options ) );

        });

        it( 'should return false for -1', function() {

            assert.isFalse( isBoolean( -1, options ) );

        });

        it( 'should return false for an empty string', function() {

            assert.isFalse( isBoolean( '', options ) );

        });

        it( 'should return false for a string', function() {

            assert.isFalse( isBoolean( 'a', options ) );

        });

        it( 'should return true for "true"', function() {

            assert.isTrue( isBoolean( 'true', options ) );

        });

        it( 'should return true for "false"', function() {

            assert.isTrue( isBoolean( 'false', options ) );

        });

        it( 'should return true for "TRUE"', function() {

            assert.isTrue( isBoolean( 'TRUE', options ) );

        });

        it( 'should return true for "FALSE"', function() {

            assert.isTrue( isBoolean( 'FALSE', options ) );

        });

    });

});