var chai = require( 'chai' );
const expect = chai.expect;

const isDate = require( '../../lib/validators/isDate' );


describe( 'isDate', function() {

    describe( 'default options', function() {

        it( 'should return true for stringified JSON date', function() {

            expect( isDate( JSON.stringify( new Date() ) ) ).to.be.true;

        });

        it( 'should return true for javascript date object', function() {

            expect( isDate( new Date() ) ).to.be.true;

        });

        it( 'should return false for an object', function() {

            expect( isDate( { getMonth: function() {} } ) ).to.be.false;

        });

        it( 'should return false for a string', function() {

            expect( isDate( 'a' ) ).to.be.false;

        });

        it( 'should return false for a positive integer', function() {

            expect( isDate( 1 ) ).to.be.false;

        });

        it( 'should return false for a negative integer', function() {

            expect( isDate( -1 ) ).to.be.false;

        });

        it( 'should return false for a float', function() {

            expect( isDate( 1.1 ) ).to.be.false;

        });

        it( 'should return false for 0', function() {

            expect( isDate( 0 ) ).to.be.false;

        });

        it( 'should return false for null', function() {

            expect( isDate( null ) ).to.be.false;

        });

        it( 'should return false for undefined', function() {

            expect( isDate( undefined ) ).to.be.false;

        });

    });

});