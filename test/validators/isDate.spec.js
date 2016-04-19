var chai = require( 'chai' );
const assert = chai.assert;

const isDate = require( '../../lib/validators/isDate' );


describe( 'isDate', function() {

    describe( 'default options', function() {

        it( 'should return true for stringified JSON date', function() {

            assert.isTrue( isDate( '2016-04-17T14:27:42.828Z' ) );

        });

        it( 'should return true for javascript date object', function() {

            assert.isTrue( isDate( new Date() ) );

        });

        it( 'should return false for an object', function() {

            assert.isFalse( isDate( { getMonth: function() {} } ) );

        });

        it( 'should return false for a string', function() {

            assert.isFalse( isDate( 'a' ) );

        });

        it( 'should return false for a positive integer', function() {

            assert.isFalse( isDate( 1 ) );

        });

        it( 'should return false for a negative integer', function() {

            assert.isFalse( isDate( -1 ) );

        });

        it( 'should return false for a float', function() {

            assert.isFalse( isDate( 1.1 ) );

        });

        it( 'should return false for 0', function() {

            assert.isFalse( isDate( 0 ) );

        });

        it( 'should return false for null', function() {

            assert.isFalse( isDate( null ) );

        });

        it( 'should return false for undefined', function() {

            assert.isFalse( isDate( undefined ) );

        });

    });

    describe( 'custom date formats', function() {

        const options = {
            parseDates: [ 'MM/DD/YYYY', 'DD.MM.YYYY' ]
        };

        it( 'should return true for a normal JSON date', function() {

            assert.isTrue( isDate( '2016-04-17T14:27:42.828Z', options ) );

        });

        it( 'should return true for the german date format', function() {

            assert.isTrue( isDate( '17.04.2016', options ) );

        });

        it( 'should return false for a german date in the wrong order', function() {

            assert.isFalse( isDate( '04.17.2016', options ) );

        });

        it( 'should return false for the US date format', function() {

            assert.isTrue( isDate( '04/17/2016', options ) );

        });

        it( 'should return false for a US date in the wrong order', function() {

            assert.isFalse( isDate( '17/04/2016', options ) );

        });

        it( 'should return true for javascript date object', function() {

            assert.isTrue( isDate( new Date(), options ) );

        });

        it( 'should return false for an object', function() {

            assert.isFalse( isDate( { getMonth: function() {} }, options ) );

        });

        it( 'should return false for a string', function() {

            assert.isFalse( isDate( 'a', options ) );

        });

        it( 'should return false for a positive integer', function() {

            assert.isFalse( isDate( 1, options ) );

        });

        it( 'should return false for a negative integer', function() {

            assert.isFalse( isDate( -1, options ) );

        });

        it( 'should return false for a float', function() {

            assert.isFalse( isDate( 1.1, options ) );

        });

        it( 'should return false for 0', function() {

            assert.isFalse( isDate( 0, options ) );

        });

        it( 'should return false for null', function() {

            assert.isFalse( isDate( null, options ) );

        });

        it( 'should return false for undefined', function() {

            assert.isFalse( isDate( undefined, options ) );

        });

    });

});