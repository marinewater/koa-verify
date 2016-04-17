var chai = require( 'chai' );
const expect = chai.expect;

const isPassing = require( '../../lib/validators/isPassing' );


describe( 'isPassing', function() {

    describe( 'default options', function() {

        it( 'should return true for a passing function', function() {

            expect( isPassing( true, ( val ) => val === true ) ).to.be.true;

        });

        it( 'should return false for a non passing function', function() {

            expect( isPassing( false, ( val ) => val === true ) ).to.be.false;

        });

        it( 'should throw an error if no function is passed', function() {

            expect( () => isPassing( true ) ).to.throw( TypeError );

        } );

        it( 'should throw an error if the function does not return a boolean in strict mode', function() {

            expect( () => isPassing( true, ( val ) => 'a' ) ).to.throw( TypeError );

        } );

    } );

    describe( 'strict mode off', function() {

        const options = {
            strict: false
        };

        it( 'should return true for a passing function', function() {

            expect( isPassing( true, ( val ) => val === true, options ) ).to.be.true;

        });

        it( 'should return false for a non passing function', function() {

            expect( isPassing( false, ( val ) => val === true, options ) ).to.be.false;

        });

        it( 'should throw an error if no function is passed', function() {

            expect( () => isPassing( true, undefined, options ) ).to.throw( TypeError );

        } );

        it( 'should return true if a string is returned', function() {

            expect( isPassing( true, ( val ) => 'a', options ) ).to.be.true;

        } );

        it( 'should return false if an empty string is returned', function() {

            expect( isPassing( true, ( val ) => '', options ) ).to.be.false;

        } );

        it( 'should return false if null is returned', function() {

            expect( isPassing( true, ( val ) => null, options ) ).to.be.false;

        } );

    } );

});