var chai = require( 'chai' );
const assert = chai.assert;

const isPassing = require( '../../lib/validators/isPassing' );


describe( 'isPassing', function() {

    describe( 'default options', function() {

        it( 'should return true for a passing function', function() {

            assert.isTrue( isPassing( true, ( val ) => val === true ) );

        });

        it( 'should return false for a non passing function', function() {

            assert.isFalse( isPassing( false, ( val ) => val === true ) );

        });

        it( 'should throw an error if no function is passed', function() {

            assert.throw( () => isPassing( true ), TypeError );

        } );

        it( 'should throw an error if the function does not return a boolean in strict mode', function() {

            assert.throw( () => isPassing( true, ( val ) => 'a' ), TypeError );

        } );

    } );

    describe( 'strict mode off', function() {

        const options = {
            strict: false
        };

        it( 'should return true for a passing function', function() {

            assert.isTrue( isPassing( true, ( val ) => val === true, options ) );

        });

        it( 'should return false for a non passing function', function() {

            assert.isFalse( isPassing( false, ( val ) => val === true, options ) );

        });

        it( 'should throw an error if no function is passed', function() {

            assert.throw( () => isPassing( true, undefined, options ), TypeError );

        } );

        it( 'should return true if a string is returned', function() {

            assert.isTrue( isPassing( true, ( val ) => 'a', options ) );

        } );

        it( 'should return false if an empty string is returned', function() {

            assert.isFalse( isPassing( true, ( val ) => '', options ) );

        } );

        it( 'should return false if null is returned', function() {

            assert.isFalse( isPassing( true, ( val ) => null, options ) );

        } );

    } );

});