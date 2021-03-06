'use strict';

const _ = require( 'underscore' );

const isBoolean = require( './validators/isBoolean' );
const isDate = require( './validators/isDate' );
const isInteger = require( './validators/isInteger' );
const isJSON = require( './validators/isJSON' );
const isMatch = require( './validators/isMatch' );
const isNull = require( './validators/isNull' );
const isNumber = require( './validators/isNumber' );
const isPassing = require( './validators/isPassing' );
const isString = require( './validators/isString' );
const isUndefined = require( './validators/isUndefined' );


class Validator {

    /**
     * initializes the Validator class
     * @param {string} key parameter to check
     * @param value value of the parameter to check
     * @param koa_this refers to koa's this
     * @param {object} options
     * @param {boolean} options.parseSting
     * @param {boolean} options.caseSensitive
     * @returns {Validator}
     */
    constructor( key, value, koa_this, options ) {

        this.koa_this = koa_this;
        this.key = key;
        this.value = value;
        this.move_on = true;
        this.allow_modifiers = true;

        this.options = options;

        // Aliases
        this.isInt = this.isInteger;
        this.gt = this.greaterThan;
        this.lt = this.lessThan;
        this.ge = this.greaterThanEqual;
        this.le = this.lessThanEqual;

        return this;

    };

    /**
     * add an error to koa's this.errors
     * @param {string} message
     */
    createError( message ) {

        if ( !this.koa_this.errors ) {
            this.koa_this.errors = [];
        }

        this.koa_this.errors.push({
            key: this.key,
            value: this.value,
            message
        });

    };

    /**
     * Modifers such as nullable() and optional() must appear before any validators in the Validator chain.
     * e.g. this.checkBody('key', true).nullable().isBoolean() is allowed,
     * but this.checkBody('key', true).isBoolean().nullable() will throw this error
     */
    static throwModifierOrderError() {
        throw {
            message: 'Modifiers (such as nullable() or optional()) must be before any validators in the chain.',
            id: 'modifier_order_error'
        };
    }

    /**
     * allows null values for any validator
     * has to be called before any validator in the chain
     * @param {object} [options]
     * @param {boolean} [options.parseString=false]
     * @param {boolean} [options.caseSensitive=true]
     * @returns {Validator}
     */
    nullable( options ) {

        options = typeof options === 'object' ? options : {};
        options = _.extend( this.options, options );

        if ( this.allow_modifiers !== true ) {
            Validator.throwModifierOrderError();
        }

        if ( this.move_on === true ) {
            if ( isNull( this.value, options ) === true ) {
                this.move_on = false;
            }
        }

        return this;

    };

    /**
     * allows undefined values for any validator
     * has to be called before any validator in the chain
     * @returns {Validator}
     */
    optional() {

        if ( this.allow_modifiers !== true ) {
            Validator.throwModifierOrderError();
        }

        if ( this.move_on === true ) {
            if ( isUndefined( this.value ) === true ) {
                this.move_on = false;
            }
        }

        return this;

    };

    /**
     * throws an error if a required parameter is missing
     * @param {object} [options]
     * @param {boolean} [options.allowEmptyString=true] if true, an empty string will NOT be added as an error
     * @param {boolean} [options.allowString=false] if true, required() will add an error if value is a string "undefined"
     * @param {boolean} [options.caseSensitive=false] if true (and allowString is true), required() will add an error
     * if value is a string "undefined" when in contains upper case letters, too
     * @param {string} [options.message={key} is required]
     * @returns {Validator}
     */
    required( options ) {

        options = typeof options === 'object' ? options : {};

        if ( this.allow_modifiers !== true ) {
            Validator.throwModifierOrderError();
        }

        if ( !options.hasOwnProperty( 'message' ) || typeof options.message !== 'string' ) {
            options.message = `${this.key} is required`
        }

        if ( !options.hasOwnProperty( 'allowEmptyString' ) || typeof options.allowEmptyString !== 'boolean' ) {
            options.allowEmptyString = true;
        }

        if ( this.move_on === true ) {

            if ( options.allowEmptyString === false ) {
                if ( isUndefined( this.value ) === true || this.value === '' ) {
                    this.move_on = false;
                    this.createError( options.message );
                }
            }
            else {
                if ( isUndefined( this.value ) === true ) {
                    this.move_on = false;
                    this.createError( options.message );
                }
            }
        }

        return this;
        
    }

    /**
     * checks if the given value is boolean
     * @param {string} [message={key} is not boolean]
     * @returns {Validator}
     */
    isBoolean( message, options ) {

        options = typeof options === 'object' ? options : {};
        options = _.extend( this.options, options );

        this.allow_modifiers = false;

        if ( this.move_on === true ) {
            if ( !message ) {
                message = `${this.key} is not boolean`
            }

            if ( isBoolean( this.value, options ) !== true ) {
                this.move_on = false;
                this.createError( message );
            }
        }

        return this;

    };

    /**
     * checks if the given value is a date
     * @param {object} [options]
     * @param {string} [options.message={key} is not a date]
     * @returns {Validator}
     */
    isDate( options ) {

        options = typeof options === 'object' ? options : {};
        options = _.extend( this.options, options );

        this.allow_modifiers = false;

        if ( this.move_on === true ) {
            if ( !options.message ) {
                options.message = `${this.key} is not a date`
            }

            if ( isDate( this.value, options ) !== true ) {
                this.move_on = false;
                this.createError( options.message );
            }
        }

        return this;

    };

    /**
     * checks if the given value is an integer
     * @param {object} [options]
     * @param {string} [options.message={key} is not integer]
     * @returns {Validator}
     */
    isInteger( options ) {

        options = typeof options === 'object' ? options : {};
        options = _.extend( this.options, options );

        this.allow_modifiers = false;

        if ( this.move_on === true ) {
            if ( typeof options.message !== 'string' ) {
                options.message = `${this.key} is not an integer`
            }

            if ( isInteger( this.value, options ) !== true ) {
                this.move_on = false;
                this.createError( options.message );
            }
        }

        return this;

    };

    /**
     * checks if the given value is valid JSON
     * @param {object} [options]
     * @param {boolean} [options.allowObject=true] allow JavaScript options
     * @param {boolean} [options.allowString=false] allow strings containing JSON data
     * @param {string} [options.message={key} is not valid JSON]
     * @returns {Validator}
     */
    isJSON( options ) {

        if ( typeof options !== 'object' ) {
            options = {};
        }

        this.allow_modifiers = false;

        if ( this.move_on === true ) {
            if ( !options.hasOwnProperty( 'message' ) || typeof options.message !== 'string' ) {
                options.message = `${this.key} is not valid JSON`
            }

            if ( isJSON( this.value, options ) !== true ) {
                this.move_on = false;
                this.createError( options.message );
            }
        }

        return this;

    };

    /**
     * check a string against a regular expression
     * @param {object} options
     * @param {RegExp} options.regex
     * @param {string} [options.message={key} does not match]
     * @returns {Validator}
     */
    isMatch( options ) {

        if ( typeof options !== 'object' ) {
            options = {};
        }

        this.allow_modifiers = false;

        if ( this.move_on === true ) {
            if ( !options.hasOwnProperty( 'message' ) || typeof options.message !== 'string' ) {
                options.message = `${this.key} does not match`
            }

            if ( isMatch( this.value, options.regex ) !== true ) {
                this.move_on = false;
                this.createError( options.message );
            }
        }

        return this;

    };

    /**
     * checks if the given value is null
     * @param {string} [message={key} is not null]
     * @returns {Validator}
     */
    isNull( message ) {

        this.allow_modifiers = false;

        if ( this.move_on === true ) {
            if ( !message ) {
                message = `${this.key} is not null`
            }

            if ( isNull( this.value ) !== true ) {
                this.move_on = false;
                this.createError( message );
            }
        }

        return this;

    };

    /**
     * checks if the given value is a number
     * @param {string} [message={key} is not a number]
     * @returns {Validator}
     */
    isNumber( message ) {

        this.allow_modifiers = false;

        if ( this.move_on === true ) {
            if ( !message ) {
                message = `${this.key} is not a number`
            }

            if ( isNumber( this.value ) !== true ) {
                this.move_on = false;
                this.createError( message );
            }
        }

        return this;

    };

    /**
     * checks if the given value passes a function test
     * @param {function} func
     * @param {object} [options]
     * @param {string} [options.message={key} is not valid]
     * @returns {Validator}
     */
    isPassing( func, options ) {

        if ( typeof options !== 'object' ) {
            options = {};
        }

        this.allow_modifiers = false;

        if ( this.move_on === true ) {
            if ( !options.message ) {
                options.message = `${this.key} is not valid`
            }

            if ( isPassing( this.value, func, options ) !== true ) {
                this.move_on = false;
                this.createError( options.message );
            }
        }

        return this;

    }

    /**
     * checks if the given value is a string
     * @param {object} [options]
     * @param {string} [options.message={key} is not a string]
     * @returns {Validator}
     */
    isString( options ) {

        if ( typeof options !== 'object' ) {
            options = {};
        }

        this.allow_modifiers = false;

        if ( this.move_on === true ) {
            if ( !options.message ) {
                options.message = `${this.key} is not a string`
            }

            if ( isString( this.value ) !== true ) {
                this.move_on = false;
                this.createError( options.message );
            }
        }

        return this;

    };

    /**
     * check if the value is greater than the provided number
     * @param {number} number
     * @param {object} [options]
     * @param {string} [options.message={key} is not greater than {number}]
     */
    greaterThan( number, options ) {

        if ( typeof options !== 'object' ) {
            options = {};
        }

        this.allow_modifiers = false;

        if ( this.move_on === true ) {
            if ( !options.message ) {
                options.message = `${this.key} is not greater than ${number}`
            }

            if ( parseFloat( this.value ) <= number ) {
                this.move_on = false;
                this.createError( options.message );
            }
        }

        return this;

    };

    /**
     * check if the value is greater than or equal to the provided number
     * @param {number} number
     * @param {object} [options]
     * @param {string} [options.message={key} is not greater than or equal to {number}]
     */
    greaterThanEqual( number, options ) {

        if ( typeof options !== 'object' ) {
            options = {};
        }

        this.allow_modifiers = false;

        if ( this.move_on === true ) {
            if ( !options.message ) {
                options.message = `${this.key} is not greater than or equal to ${number}`
            }

            if ( parseFloat( this.value ) < number ) {
                this.move_on = false;
                this.createError( options.message );
            }
        }

        return this;

    };

    /**
     * check if the value is less than the provided number
     * @param {number} number
     * @param {object} [options]
     * @param {string} [options.message={key} is not less than {number}]
     */
    lessThan( number, options ) {

        if ( typeof options !== 'object' ) {
            options = {};
        }

        this.allow_modifiers = false;

        if ( this.move_on === true ) {
            if ( !options.message ) {
                options.message = `${this.key} is not less than ${number}`
            }

            if ( parseFloat( this.value ) >= number ) {
                this.move_on = false;
                this.createError( options.message );
            }
        }

        return this;

    };

    /**
     * check if the value is less than or equal to the provided number
     * @param {number} number
     * @param {object} [options]
     * @param {string} [options.message={key} is not less than or equal to {number}]
     */
    lessThanEqual( number, options ) {

        if ( typeof options !== 'object' ) {
            options = {};
        }

        this.allow_modifiers = false;

        if ( this.move_on === true ) {
            if ( !options.message ) {
                options.message = `${this.key} is not less than or equal to ${number}`
            }

            if ( parseFloat( this.value ) > number ) {
                this.move_on = false;
                this.createError( options.message );
            }
        }

        return this;

    };

}

module.exports = Validator;