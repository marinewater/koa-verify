var chai = require( 'chai' );
const assert = chai.assert;

const isNull = require( '../../lib/validators/isNull' );


describe( 'isNull', function() {

    describe( 'default options', function() {

        it( 'should return false for true', function() {

            assert.isFalse( isNull( true ) );

        });

        it( 'should return false for false', function() {

            assert.isFalse( isNull( false ) );

        });

        it( 'should return true for null', function() {

            assert.isTrue( isNull( null ) );

        });

        it( 'should return false for no argument', function() {

            assert.isFalse( isNull() );

        });

        it( 'should return false for undefined', function() {

            assert.isFalse( isNull( undefined ) );

        });

        it( 'should return false for 1', function() {

            assert.isFalse( isNull( 1 ) );

        });

        it( 'should return false for 0', function() {

            assert.isFalse( isNull( 0 ) );

        });

        it( 'should return false for -1', function() {

            assert.isFalse( isNull( -1 ) );

        });

        it( 'should return false for an empty string', function() {

            assert.isFalse( isNull( '' ) );

        });

        it( 'should return false for a string', function() {

            assert.isFalse( isNull( 'a' ) );

        });

        it( 'should return false for "null"', function() {

            assert.isFalse( isNull( 'null' ) );

        });

    });

    describe( 'parseString', function() {

        const options = {
            parseString: true
        };

        it( 'should return false for true', function() {

            assert.isFalse( isNull( true, options ) );

        });

        it( 'should return false for false', function() {

            assert.isFalse( isNull( false, options ) );

        });

        it( 'should return true for null', function() {

            assert.isTrue( isNull( null, options ) );

        });

        it( 'should return false for undefined', function() {

            assert.isFalse( isNull( undefined, options ) );

        });

        it( 'should return false for 1', function() {

            assert.isFalse( isNull( 1, options ) );

        });

        it( 'should return false for 0', function() {

            assert.isFalse( isNull( 0, options ) )

        });

        it( 'should return false for -1', function() {

            assert.isFalse( isNull( -1, options ) );

        });

        it( 'should return false for an empty string', function() {

            assert.isFalse( isNull( '', options ) );

        });

        it( 'should return false for a string', function() {

            assert.isFalse( isNull( 'a', options ) );

        });

        it( 'should return true for "null"', function() {

            assert.isTrue( isNull( 'null', options ) );

        });

        it( 'should return false for "NULL"', function() {

            assert.isFalse( isNull( 'NULL', options ) );

        });

    });

    describe( 'case insensitive', function() {

        const options = {
            parseString: true,
            caseSensitive: false
        };

        it( 'should return false for true', function() {

            assert.isFalse( isNull( true, options ) );

        });

        it( 'should return false for false', function() {

            assert.isFalse( isNull( false, options ) );

        });

        it( 'should return true for null', function() {

            assert.isTrue( isNull( null, options ) );

        });

        it( 'should return false for undefined', function() {

            assert.isFalse( isNull( undefined, options ) );

        });

        it( 'should return false for 1', function() {

            assert.isFalse( isNull( 1, options ) );

        });

        it( 'should return false for 0', function() {

            assert.isFalse( isNull( 0, options ) );

        });

        it( 'should return false for -1', function() {

            assert.isFalse( isNull( -1, options ) );

        });

        it( 'should return false for an empty string', function() {

            assert.isFalse( isNull( '', options ) );

        });

        it( 'should return false for a string', function() {

            assert.isFalse( isNull( 'a', options ) );

        });

        it( 'should return true for "null"', function() {

            assert.isTrue( isNull( 'null', options ) );

        });

        it( 'should return true for "NULL"', function() {

            assert.isTrue( isNull( 'NULL', options ) );

        });

    });

});