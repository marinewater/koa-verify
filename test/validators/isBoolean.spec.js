var chai = require( 'chai' );
const expect = chai.expect;

const isBoolean = require( '../../lib/validators/isBoolean' );


describe( 'isBoolean', function() {

    describe( 'default options', function() {

        it( 'should return true for true', function() {

            expect( isBoolean( true ) ).to.be.true;

        });

        it( 'should return true for false', function() {

            expect( isBoolean( false ) ).to.be.true;

        });

        it( 'should return false for null', function() {

            expect( isBoolean( null ) ).to.be.false;

        });

        it( 'should return false for no argument', function() {

            expect( isBoolean() ).to.be.false;

        });

        it( 'should return false for undefined', function() {

            expect( isBoolean( undefined ) ).to.be.false;

        });

        it( 'should return false for 1', function() {

            expect( isBoolean( 1 ) ).to.be.false;

        });

        it( 'should return false for 0', function() {

            expect( isBoolean( 0 ) ).to.be.false;

        });

        it( 'should return false for -1', function() {

            expect( isBoolean( -1 ) ).to.be.false;

        });

        it( 'should return false for an empty string', function() {

            expect( isBoolean( '' ) ).to.be.false;

        });

        it( 'should return false for a string', function() {

            expect( isBoolean( 'a' ) ).to.be.false;

        });

        it( 'should return false for "true"', function() {

            expect( isBoolean( 'true' ) ).to.be.false;

        });

        it( 'should return false for "false"', function() {

            expect( isBoolean( 'false' ) ).to.be.false;

        });

    });

    describe( 'parseString', function() {

        const options = {
            parseString: true
        };

        it( 'should return true for true', function() {

            expect( isBoolean( true, options ) ).to.be.true;

        });

        it( 'should return true for false', function() {

            expect( isBoolean( false, options ) ).to.be.true;

        });

        it( 'should return false for null', function() {

            expect( isBoolean( null, options ) ).to.be.false;

        });

        it( 'should return false for undefined', function() {

            expect( isBoolean( undefined, options ) ).to.be.false;

        });

        it( 'should return false for 1', function() {

            expect( isBoolean( 1, options ) ).to.be.false;

        });

        it( 'should return false for 0', function() {

            expect( isBoolean( 0, options ) ).to.be.false;

        });

        it( 'should return false for -1', function() {

            expect( isBoolean( -1, options ) ).to.be.false;

        });

        it( 'should return false for an empty string', function() {

            expect( isBoolean( '', options ) ).to.be.false;

        });

        it( 'should return false for a string', function() {

            expect( isBoolean( 'a', options ) ).to.be.false;

        });

        it( 'should return true for "true"', function() {

            expect( isBoolean( 'true', options ) ).to.be.true;

        });

        it( 'should return true for "false"', function() {

            expect( isBoolean( 'false', options ) ).to.be.true;

        });

        it( 'should return false for "TRUE"', function() {

            expect( isBoolean( 'TRUE', options ) ).to.be.false;

        });

        it( 'should return false for "FALSE"', function() {

            expect( isBoolean( 'FALSE', options ) ).to.be.false;

        });

    });

    describe( 'case insensitive', function() {

        const options = {
            parseString: true,
            caseSensitive: false
        };

        it( 'should return true for true', function() {

            expect( isBoolean( true, options ) ).to.be.true;

        });

        it( 'should return true for false', function() {

            expect( isBoolean( false, options ) ).to.be.true;

        });

        it( 'should return false for null', function() {

            expect( isBoolean( null, options ) ).to.be.false;

        });

        it( 'should return false for undefined', function() {

            expect( isBoolean( undefined, options ) ).to.be.false;

        });

        it( 'should return false for 1', function() {

            expect( isBoolean( 1, options ) ).to.be.false;

        });

        it( 'should return false for 0', function() {

            expect( isBoolean( 0, options ) ).to.be.false;

        });

        it( 'should return false for -1', function() {

            expect( isBoolean( -1, options ) ).to.be.false;

        });

        it( 'should return false for an empty string', function() {

            expect( isBoolean( '', options ) ).to.be.false;

        });

        it( 'should return false for a string', function() {

            expect( isBoolean( 'a', options ) ).to.be.false;

        });

        it( 'should return true for "true"', function() {

            expect( isBoolean( 'true', options ) ).to.be.true;

        });

        it( 'should return true for "false"', function() {

            expect( isBoolean( 'false', options ) ).to.be.true;

        });

        it( 'should return true for "TRUE"', function() {

            expect( isBoolean( 'true', options ) ).to.be.true;

        });

        it( 'should return true for "FALSE"', function() {

            expect( isBoolean( 'false', options ) ).to.be.true;

        });

    });

});