var chai = require( 'chai' );
const expect = chai.expect;

const isInteger = require( '../../lib/validators/isInteger' );

describe( 'isInteger', function() {

    describe( 'default options', function() {

        it( 'should return true for 1', function() {

            expect( isInteger( 1 ) ).to.be.true;

        });

        it( 'should return true for 0', function() {

            expect( isInteger( 0 ) ).to.be.true;

        });

        it( 'should return true for -1', function() {

            expect( isInteger( -1 ) ).to.be.true;

        });

        it( 'should return false for 0.1', function() {

            expect( isInteger( 0.1 ) ).to.be.false;

        });

        it( 'should return false for -0.1', function() {

            expect( isInteger( -0.1 ) ).to.be.false;

        });

        it( 'should return false for "0"', function() {

            expect( isInteger( '0' ) ).to.be.false;

        });

        it( 'should return false for "1"', function() {

            expect( isInteger( '1' ) ).to.be.false;

        });

        it( 'should return false for "-1"', function() {

            expect( isInteger( '-1' ) ).to.be.false;

        });

        it( 'should return false for "0.1"', function() {

            expect( isInteger( '0.1' ) ).to.be.false;

        });

        it( 'should return false for "-0.1"', function() {

            expect( isInteger( '-0.1' ) ).to.be.false;

        });

        it( 'should return false for true', function() {

            expect( isInteger( true ) ).to.be.false;

        });

        it( 'should return false for false', function() {

            expect( isInteger( false ) ).to.be.false;

        });

        it( 'should return false for null', function() {

            expect( isInteger( null ) ).to.be.false;

        });

        it( 'should return false for undefined', function() {

            expect( isInteger( undefined ) ).to.be.false;

        });

        it( 'should return false for no argument', function() {

            expect( isInteger() ).to.be.false;

        });

    });

    describe( 'parse string', function() {

        const options = {
            parseString: true
        };

        it( 'should return true for 1', function() {

            expect( isInteger( 1, options ) ).to.be.true;

        });

        it( 'should return true for 0', function() {

            expect( isInteger( 0, options ) ).to.be.true;

        });

        it( 'should return true for -1', function() {

            expect( isInteger( -1, options ) ).to.be.true;

        });

        it( 'should return false for 0.1', function() {

            expect( isInteger( 0.1, options ) ).to.be.false;

        });

        it( 'should return false for -0.1', function() {

            expect( isInteger( -0.1, options ) ).to.be.false;

        });

        it( 'should return true for "0"', function() {

            expect( isInteger( '0', options ) ).to.be.true;

        });

        it( 'should return true for "1"', function() {

            expect( isInteger( '1', options ) ).to.be.true;

        });

        it( 'should return true for "-1"', function() {

            expect( isInteger( '-1', options ) ).to.be.true;

        });

        it( 'should return false for "0.1"', function() {

            expect( isInteger( '0.1', options ) ).to.be.false;

        });

        it( 'should return false for "-0.1"', function() {

            expect( isInteger( '-0.1', options ) ).to.be.false;

        });

        it( 'should return false for true', function() {

            expect( isInteger( true, options ) ).to.be.false;

        });

        it( 'should return false for false', function() {

            expect( isInteger( false, options ) ).to.be.false;

        });

        it( 'should return false for null', function() {

            expect( isInteger( null, options ) ).to.be.false;

        });

        it( 'should return false for undefined', function() {

            expect( isInteger( undefined, options ) ).to.be.false;

        });

    });

});