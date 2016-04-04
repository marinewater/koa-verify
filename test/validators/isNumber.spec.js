var chai = require( 'chai' );
const expect = chai.expect;

const isNumber = require( '../../lib/validators/isNumber' );

describe( 'isNumber', function() {

    it( 'should return true for 1', function() {

        expect( isNumber( 1 ) ).to.be.true;

    });

    it( 'should return true for 0', function() {

        expect( isNumber( 0 ) ).to.be.true;

    });

    it( 'should return true for -1', function() {

        expect( isNumber( -1 ) ).to.be.true;

    });

    it( 'should return true for 0.1', function() {

        expect( isNumber( 0.1 ) ).to.be.true;

    });

    it( 'should return true for -0.1', function() {

        expect( isNumber( -0.1 ) ).to.be.true;

    });

    it( 'should return false for "0"', function() {

        expect( isNumber( '0' ) ).to.be.false;

    });

    it( 'should return false for "1"', function() {

        expect( isNumber( '1' ) ).to.be.false;

    });

    it( 'should return false for "-1"', function() {

        expect( isNumber( '-1' ) ).to.be.false;

    });

    it( 'should return false for true', function() {

        expect( isNumber( true ) ).to.be.false;

    });

    it( 'should return false for false', function() {

        expect( isNumber( false ) ).to.be.false;

    });

    it( 'should return false for null', function() {

        expect( isNumber( null ) ).to.be.false;

    });

    it( 'should return false for undefined', function() {

        expect( isNumber( undefined ) ).to.be.false;

    });

    it( 'should return false for no argument', function() {

        expect( isNumber() ).to.be.false;

    });

});