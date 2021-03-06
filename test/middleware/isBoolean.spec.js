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

    describe( 'isBoolean', function() {

        it( 'should validate a boolean', function( done ) {

            app.use( function *() {

                this.checkBody( 'boolean' ).isBoolean();

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
                    boolean: true
                })
                .expect( 200, done );

        } );

        it( 'should not validate a string', function( done ) {

            app.use( function *() {

                this.checkBody( 'boolean' ).isBoolean();

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
                    boolean: 'a'
                })
                .expect( 400, done );

        } );
        
        it( 'should not validate null', function( done ) {

            app.use( function *() {

                this.checkBody( 'boolean' ).isBoolean();

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
                    boolean: null
                })
                .expect( 400, done );

        } );

        it( 'should not validate undefined', function( done ) {

            app.use( function *() {

                this.checkBody( 'boolean' ).isBoolean();

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
                    boolean: undefined
                })
                .expect( 400, done );

        } );

        it( 'should not validate an empty body', function( done ) {

            app.use( function *() {

                this.checkBody( 'boolean' ).isBoolean();

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