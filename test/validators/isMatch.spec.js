'use strict';

const chai = require( 'chai' );
const expect = chai.expect;

const isMatch = require( '../../lib/validators/isMatch' );


describe( 'isMatch', function() {

    it( 'should throw an error if no RegExp is provided', function() {

        expect( isMatch.bind( undefined, '' ) ).to.throw({
            message: '"regex" is not a valid regular expression',
            id: 'invalid_regex'
        });

    });

    it( 'should throw an error if a string is provided instead of a regular expression', function() {

        expect( isMatch.bind( undefined, '', '' ) ).to.throw({
            message: '"regex" is not a valid regular expression',
            id: 'invalid_regex'
        });

    });

    it( 'should match a regular expression', function() {

        expect( isMatch( 'a', /^a$/ ) ).to.be.true;

    });

    it( 'should not match a regular expression', function() {

        expect( isMatch( 'a', /^b$/ ) ).to.be.false;

    });

    it( 'should not match null', function() {

        expect( isMatch( null, /.*/ ) ).to.be.false;

    });

    it( 'should not match undefined', function() {

        expect( isMatch( undefined, /.*/ ) ).to.be.false;

    });

});