var chai = require( 'chai' );
const expect = chai.expect;

const isUndefined = require( '../../lib/validators/isUndefined' );


describe( 'isUndefined', function() {

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