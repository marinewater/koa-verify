var chai = require( 'chai' );
const expect = chai.expect;

const isNull = require( '../../lib/validators/isNull' );


describe( 'isNull', function() {

    describe( 'default options', function() {

        it( 'should return false for true', function() {

            expect( isNull( true ) ).to.be.false;

        });

        it( 'should return false for false', function() {

            expect( isNull( false ) ).to.be.false;

        });

        it( 'should return true for null', function() {

            expect( isNull( null ) ).to.be.true;

        });

        it( 'should return false for no argument', function() {

            expect( isNull() ).to.be.false;

        });

        it( 'should return false for undefined', function() {

            expect( isNull( undefined ) ).to.be.false;

        });

        it( 'should return false for 1', function() {

            expect( isNull( 1 ) ).to.be.false;

        });

        it( 'should return false for 0', function() {

            expect( isNull( 0 ) ).to.be.false;

        });

        it( 'should return false for -1', function() {

            expect( isNull( -1 ) ).to.be.false;

        });

        it( 'should return false for an empty string', function() {

            expect( isNull( '' ) ).to.be.false;

        });

        it( 'should return false for a string', function() {

            expect( isNull( 'a' ) ).to.be.false;

        });

        it( 'should return false for "null"', function() {

            expect( isNull( 'null' ) ).to.be.false;

        });

    });

    describe( 'parseString', function() {

        const options = {
            parseString: true
        };

        it( 'should return false for true', function() {

            expect( isNull( true, options ) ).to.be.false;

        });

        it( 'should return false for false', function() {

            expect( isNull( false, options ) ).to.be.false;

        });

        it( 'should return true for null', function() {

            expect( isNull( null, options ) ).to.be.true;

        });

        it( 'should return false for undefined', function() {

            expect( isNull( undefined, options ) ).to.be.false;

        });

        it( 'should return false for 1', function() {

            expect( isNull( 1, options ) ).to.be.false;

        });

        it( 'should return false for 0', function() {

            expect( isNull( 0, options ) ).to.be.false;

        });

        it( 'should return false for -1', function() {

            expect( isNull( -1, options ) ).to.be.false;

        });

        it( 'should return false for an empty string', function() {

            expect( isNull( '', options ) ).to.be.false;

        });

        it( 'should return false for a string', function() {

            expect( isNull( 'a', options ) ).to.be.false;

        });

        it( 'should return true for "null"', function() {

            expect( isNull( 'null', options ) ).to.be.true;

        });

        it( 'should return false for "NULL"', function() {

            expect( isNull( 'NULL', options ) ).to.be.false;

        });

    });

    describe( 'case insensitive', function() {

        const options = {
            parseString: true,
            caseSensitive: false
        };

        it( 'should return false for true', function() {

            expect( isNull( true, options ) ).to.be.false;

        });

        it( 'should return false for false', function() {

            expect( isNull( false, options ) ).to.be.false;

        });

        it( 'should return true for null', function() {

            expect( isNull( null, options ) ).to.be.true;

        });

        it( 'should return false for undefined', function() {

            expect( isNull( undefined, options ) ).to.be.false;

        });

        it( 'should return false for 1', function() {

            expect( isNull( 1, options ) ).to.be.false;

        });

        it( 'should return false for 0', function() {

            expect( isNull( 0, options ) ).to.be.false;

        });

        it( 'should return false for -1', function() {

            expect( isNull( -1, options ) ).to.be.false;

        });

        it( 'should return false for an empty string', function() {

            expect( isNull( '', options ) ).to.be.false;

        });

        it( 'should return false for a string', function() {

            expect( isNull( 'a', options ) ).to.be.false;

        });

        it( 'should return true for "null"', function() {

            expect( isNull( 'null', options ) ).to.be.true;

        });

        it( 'should return true for "NULL"', function() {

            expect( isNull( 'NULL', options ) ).to.be.true;

        });

    });

});