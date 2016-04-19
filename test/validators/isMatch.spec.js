'use strict';

const chai = require( 'chai' );
const assert = chai.assert;

const isMatch = require( '../../lib/validators/isMatch' );


describe( 'isMatch', function() {

    it( 'should throw an error if no RegExp is provided', function() {

        assert.throw( () => isMatch( '' ) );

    });

    it( 'should throw an error if a string is provided instead of a regular expression', function() {

        assert.throw( () => isMatch( '', '') );

    });

    it( 'should match a regular expression', function() {

        assert.isTrue( isMatch( 'a', /^a$/ ) );

    });

    it( 'should not match a regular expression', function() {

        assert.isFalse( isMatch( 'a', /^b$/ ) );

    });

    it( 'should not match null', function() {

        assert.isFalse( isMatch( null, /.*/ ) );

    });

    it( 'should not match undefined', function() {

        assert.isFalse( isMatch( undefined, /.*/ ) );

    });

    it( 'should not match a number', function() {

        assert.isFalse( isMatch( 1, /.*/ ) );

    });

});