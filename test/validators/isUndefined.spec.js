var chai = require( 'chai' );
const expect = chai.expect;

const isUndefined = require( '../../lib/validators/isUndefined' );


describe( 'isUndefined', function() {

    describe( 'default options', function() {

        it( 'should return false for true', function() {

            expect( isUndefined( true ) ).to.be.false;

        });

        it( 'should return false for false', function() {

            expect( isUndefined( false ) ).to.be.false;

        });

        it( 'should return false for null', function() {

            expect( isUndefined( null ) ).to.be.false;

        });

        it( 'should return true for no argument', function() {

            expect( isUndefined() ).to.be.true;

        });

        it( 'should return true for undefined', function() {

            expect( isUndefined( undefined ) ).to.be.true;

        });

        it( 'should return false for "undefined"', function() {

            expect( isUndefined( 'undefined' ) ).to.be.false;

        });

        it( 'should return false for "UNDEFINED"', function() {

            expect( isUndefined( 'UNDEFINED' ) ).to.be.false;

        });

        it( 'should return false for 1', function() {

            expect( isUndefined( 1 ) ).to.be.false;

        });

        it( 'should return false for 0', function() {

            expect( isUndefined( 0 ) ).to.be.false;

        });

        it( 'should return false for -1', function() {

            expect( isUndefined( -1 ) ).to.be.false;

        });

        it( 'should return false for an empty string', function() {

            expect( isUndefined( '' ) ).to.be.false;

        });

        it( 'should return false for a string', function() {

            expect( isUndefined( 'a' ) ).to.be.false;

        });

        it( 'should return false for "true"', function() {

            expect( isUndefined( 'true' ) ).to.be.false;

        });

        it( 'should return false for "false"', function() {

            expect( isUndefined( 'false' ) ).to.be.false;

        });

    });

    describe( 'parse string', function() {

        const options = {
            parseString: true
        };

        it( 'should return false for true', function() {

            expect( isUndefined( true, options ) ).to.be.false;

        });

        it( 'should return false for false', function() {

            expect( isUndefined( false, options ) ).to.be.false;

        });

        it( 'should return false for null', function() {

            expect( isUndefined( null, options ) ).to.be.false;

        });

        it( 'should return true for undefined', function() {

            expect( isUndefined( undefined, options ) ).to.be.true;

        });

        it( 'should return true for "undefined"', function() {

            expect( isUndefined( 'undefined', options ) ).to.be.true;

        });

        it( 'should return false for "UNDEFINED"', function() {

            expect( isUndefined( 'UNDEFINED', options ) ).to.be.false;

        });

        it( 'should return false for 1', function() {

            expect( isUndefined( 1, options ) ).to.be.false;

        });

        it( 'should return false for 0', function() {

            expect( isUndefined( 0, options ) ).to.be.false;

        });

        it( 'should return false for -1', function() {

            expect( isUndefined( -1, options ) ).to.be.false;

        });

        it( 'should return false for an empty string', function() {

            expect( isUndefined( '', options ) ).to.be.false;

        });

        it( 'should return false for a string', function() {

            expect( isUndefined( 'a', options ) ).to.be.false;

        });

        it( 'should return false for "true"', function() {

            expect( isUndefined( 'true', options ) ).to.be.false;

        });

        it( 'should return false for "false"', function() {

            expect( isUndefined( 'false', options ) ).to.be.false;

        });

    });

    describe( 'case insensitive', function() {

        const options = {
            parseString: true,
            caseSensitive: false
        };

        it( 'should return false for true', function() {

            expect( isUndefined( true, options ) ).to.be.false;

        });

        it( 'should return false for false', function() {

            expect( isUndefined( false, options ) ).to.be.false;

        });

        it( 'should return false for null', function() {

            expect( isUndefined( null, options ) ).to.be.false;

        });

        it( 'should return true for undefined', function() {

            expect( isUndefined( undefined, options ) ).to.be.true;

        });

        it( 'should return true for "undefined"', function() {

            expect( isUndefined( 'undefined', options ) ).to.be.true;

        });

        it( 'should return true for "UNDEFINED"', function() {

            expect( isUndefined( 'UNDEFINED', options ) ).to.be.true;

        });

        it( 'should return false for 1', function() {

            expect( isUndefined( 1, options ) ).to.be.false;

        });

        it( 'should return false for 0', function() {

            expect( isUndefined( 0, options ) ).to.be.false;

        });

        it( 'should return false for -1', function() {

            expect( isUndefined( -1, options ) ).to.be.false;

        });

        it( 'should return false for an empty string', function() {

            expect( isUndefined( '', options ) ).to.be.false;

        });

        it( 'should return false for a string', function() {

            expect( isUndefined( 'a', options ) ).to.be.false;

        });

        it( 'should return false for "true"', function() {

            expect( isUndefined( 'true', options ) ).to.be.false;

        });

        it( 'should return false for "false"', function() {

            expect( isUndefined( 'false', options ) ).to.be.false;

        });

    });

});