'use strict';

const _ = require( 'underscore' );
const moment = require( 'moment' );


function isDateDefaultOptions( options ) {

    if ( typeof options !== 'object' ) {
        options = {};
    }

    let defaultOptions = {
        parseDates: [],
        strictParsing: true
    };

    return _.extendOwn( defaultOptions, options );

}

/**
 *
 * @param date
 * @param {object} [options]
 * @param {string[]} [options.parseDates] an array of moment format strings that the validator should pass
 * http://momentjs.com/docs/#/parsing/string-format/
 * @param {boolean} [options.strictParsing=true]
 * @returns {boolean}
 */
module.exports = function isDate( date, options ) {

    options = isDateDefaultOptions( options );

    if ( Object.prototype.toString.call( date ) === '[object Date]' ) {
        return true;
    }

    if ( typeof date === 'string' ) {
        if ( moment( date, 'YYYY-MM-DDTHH:mm:ss.SSSZ', options.strictParsing ).isValid() === true ) {
            return true;
        }
        else {
            return options.parseDates.some(  ( date_format ) => moment( date, date_format, options.strictParsing ).isValid() === true );
        }
    }

    return false;

};