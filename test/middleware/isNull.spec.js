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

    describe( 'isNull', function() {

        it( 'should validate null', function( done ) {

            app.use( function *() {

                this.checkBody( '_null' ).isNull();

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
                    _null: null
                })
                .expect( 200, done );

        } );

        it( 'should not validate an empty string', function( done ) {

            app.use( function *() {

                this.checkBody( '_null' ).isNull();

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
                    _null: ''
                })
                .expect( 400, done );

        } );
        
        it( 'should not validate false', function( done ) {

            app.use( function *() {

                this.checkBody( '_null' ).isNull();

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
                    _null: false
                })
                .expect( 400, done );

        } );

        it( 'should not validate undefined', function( done ) {

            app.use( function *() {

                this.checkBody( '_null' ).isNull();

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
                    _null: undefined
                })
                .expect( 400, done );

        } );

        it( 'should not validate an empty body', function( done ) {

            app.use( function *() {

                this.checkBody( '_null' ).isNull();

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