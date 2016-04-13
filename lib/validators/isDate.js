'use strict';

const moment = require( 'moment' );

module.exports = function isDate( date ) {

    if ( Object.prototype.toString.call( date ) === '[object Date]' ) {
        return true;
    }

    if ( typeof date === 'string' ) {
        return moment( date, 'YYYY-MM-DDTHH:mm:ss.SSSZ' ).isValid();
    }

    return false;

};