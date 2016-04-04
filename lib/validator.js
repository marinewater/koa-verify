'use strict';

const isBoolean = require( './validators/isBoolean' );
const isInteger = require( './validators/isInteger' );
const isNull = require( './validators/isNull' );
const isUndefined = require( './validators/isUndefined' );


class Validator {

    /**
     * initializes the Validator class
     * @param {string} key parameter to check
     * @param value value of the parameter to check
     * @param koa_this refers to koa's this
     * @returns {Validator}
     */
    constructor( key, value, koa_this ) {

        this.koa_this = koa_this;
        this.key = key;
        this.value = value;
        this.move_on = true;
        this.allow_modifiers = true;

        // Aliases
        this.isInt = this.isInteger;

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
     * @returns {Validator}
     */
    nullable() {

        if ( this.allow_modifiers !== true ) {
            Validator.throwModifierOrderError();
        }

        if ( this.move_on === true ) {
            if ( isNull( this.value ) === true ) {
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

    }

    /**
     * checks if the given value is boolean
     * @param {string} [message={key} is not boolean]
     * @returns {Validator}
     */
    isBoolean( message ) {

        this.allow_modifiers = false;

        if ( this.move_on === true ) {
            if ( !message ) {
                message = `${this.key} is not boolean`
            }

            if ( isBoolean( this.value ) !== true ) {
                this.move_on = false;
                this.createError( message );
            }
        }

        return this;

    };

    /**
     * checks if the given value is an integer
     * @param {string} [message={key} is not integer]
     * @returns {Validator}
     */
    isInteger( message ) {

        this.allow_modifiers = false;

        if ( this.move_on === true ) {
            if ( !message ) {
                message = `${this.key} is not an integer`
            }

            if ( isInteger( this.value ) !== true ) {
                this.move_on = false;
                this.createError( message );
            }
        }

        return this;

    };

}

module.exports = Validator;