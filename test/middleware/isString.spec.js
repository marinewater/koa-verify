'use strict';

const supertest = require( 'supertest' );

const koa = require( 'koa' );
const koa_body = require( 'koa-body' );

const middleware = require( '../../lib/middleware' )();

describe( 'middleware', function() {

    let app;

    beforeEach( function() {

        app = koa();
        app.use( koa_body() );
        app.use( middleware );

    });

    describe( 'isString', function() {

        it( 'should validate an empty string', function( done ) {

            app.use( function *() {

                this.checkBody( 'string' ).isString();

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
                    string: ''
                })
                .expect( 200, done );

        } );

        it( 'should validate a string', function( done ) {

            app.use( function *() {

                this.checkBody( 'string' ).isString();

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
                    string: 'a'
                })
                .expect( 200, done );

        } );

        it( 'should not validate null', function( done ) {

            app.use( function *() {

                this.checkBody( 'string' ).isString();

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
                    string: null
                })
                .expect( 400, done );

        } );

        it( 'should not validate undefined', function( done ) {

            app.use( function *() {

                this.checkBody( 'string' ).isString();

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
                    string: undefined
                })
                .expect( 400, done );

        } );

        it( 'should not validate an empty body', function( done ) {

            app.use( function *() {

                this.checkBody( 'string' ).isString();

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

});