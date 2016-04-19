var chai = require( 'chai' );
const assert = chai.assert;

const isNumber = require( '../../lib/validators/isNumber' );

describe( 'isNumber', function() {

    it( 'should return true for 1', function() {

        assert.isTrue( isNumber( 1 ) );

    });

    it( 'should return true for 0', function() {

        assert.isTrue( isNumber( 0 ) );

    });

    it( 'should return true for -1', function() {

        assert.isTrue( isNumber( -1  ) );

    });

    it( 'should return true for 0.1', function() {

        assert.isTrue( isNumber( 0.1 ) );

    });

    it( 'should return true for -0.1', function() {

        assert.isTrue( isNumber( -0.1 ) );

    });

    it( 'should return false for "0"', function() {

        assert.isFalse( isNumber( '0' ) );

    });

    it( 'should return false for "1"', function() {

        assert.isFalse( isNumber( '1' ) );

    });

    it( 'should return false for "-1"', function() {

        assert.isFalse( isNumber( '-1' ) );

    });

    it( 'should return false for true', function() {

        assert.isFalse( isNumber( true ) );

    });

    it( 'should return false for false', function() {

        assert.isFalse( isNumber( false ) );

    });

    it( 'should return false for null', function() {

        assert.isFalse( isNumber( null ) );

    });

    it( 'should return false for undefined', function() {

        assert.isFalse( isNumber( undefined ) );

    });

    it( 'should return false for no argument', function() {

        assert.isFalse( isNumber() );

    });

});