'use strict';

const supertest = require( 'supertest' );

const koa = require( 'koa' );
const koa_body = require( 'koa-body' );

const middleware = require( '../../lib/middleware' )();

describe( 'middleware isDate', function() {

    let app;

    beforeEach( function() {

        app = koa();
        app.use( koa_body() );
        app.use( middleware );

    });

    it( 'should validate a date', function( done ) {

        app.use( function *() {

            this.checkBody( 'date' ).isDate();

            if ( this.errors ) {
                this.status = 400;
            }
            else {
                this.status = 200;
            }

        });

        let request = supertest( app.listen() );

        request.post( '/' )
            .send({
                date: new Date()
            })
            .expect( 200, done );

    } );

    it( 'should not validate a string', function( done ) {

        app.use( function *() {

            this.checkBody( 'date' ).isDate();

            if ( this.errors ) {
                this.status = 400;
            }
            else {
                this.status = 200;
            }

        });

        let request = supertest( app.listen() );

        request.post( '/' )
            .send({
                date: 'a'
            })
            .expect( 400, done );

    } );

    it( 'should not validate null', function( done ) {

        app.use( function *() {

            this.checkBody( 'date' ).isDate();

            if ( this.errors ) {
                this.status = 400;
            }
            else {
                this.status = 200;
            }

        });

        let request = supertest( app.listen() );

        request.post( '/' )
            .send({
                date: null
            })
            .expect( 400, done );

    } );

    it( 'should not validate undefined', function( done ) {

        app.use( function *() {

            this.checkBody( 'date' ).isDate();

            if ( this.errors ) {
                this.status = 400;
            }
            else {
                this.status = 200;
            }

        });

        let request = supertest( app.listen() );

        request.post( '/' )
            .send({
                date: undefined
            })
            .expect( 400, done );

    } );

    it( 'should not validate an empty body', function( done ) {

        app.use( function *() {

            this.checkBody( 'date' ).isDate();

            if ( this.errors ) {
                this.status = 400;
            }
            else {
                this.status = 200;
            }

        });

        let request = supertest( app.listen() );

        request.post( '/' )
            .send({})
            .expect( 400, done );

    } );

});