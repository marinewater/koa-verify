'use strict';

function defaultOptions( options ) {

    if ( typeof options !== 'object' ) {
        options = {};
    }

    if ( !options.hasOwnProperty( 'allowObject' ) ) {
        options.allowObject = true;
    }

    if ( !options.hasOwnProperty( 'allowString' ) ) {
        options.allowString = false;
    }

    return options;

}

/**
 * validates JSON formatted data
 * allows only objects as root, arrays and values as root will not validate
 * if you need these types, set allowString to true and JSON.stringify the JSON data before passing it to this function
 * @param json
 * @param {object} [options]
 * @param {boolean} [options.allowObject=true] allow JavaScript options
 * @param {boolean} [options.allowString=false] allow strings containing JSON data
 * @returns {boolean|Array}
 */
module.exports = function isJSON( json, options ) {

    options = defaultOptions( options );

    if ( options.allowObject === true &&
        typeof json === 'object' &&
        json !== null &&
        Object.prototype.toString.call( json ) !== '[object Array]' &&
        Object.prototype.toString.call( json ) !== '[object Date]'
    ) {
        return true;
    }

    if ( options.allowString === true && typeof json === 'string' ) {
        try {
            JSON.parse( json );

            return true;
        }
        catch( e ) {
            return false;
        }
    }

    return false;

};