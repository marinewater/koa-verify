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

    describe( 'lessThanEqual', function() {

        it( 'should validate 0 <= 1', function( done ) {

            app.use( function *() {

                this.checkBody( 'less' ).isNumber().lessThanEqual( 1 );

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
                    less: 0
                })
                .expect( 200, done );

        } );

        it( 'should validate 0 <= 0.1', function( done ) {

            app.use( function *() {

                this.checkBody( 'less' ).isNumber().lessThanEqual( 0.1 );

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
                    less: 0
                })
                .expect( 200, done );

        } );

        it( 'should not validate 0 <= -1', function( done ) {

            app.use( function *() {

                this.checkBody( 'less' ).isNumber().lessThanEqual( -1 );

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
                    less: 0
                })
                .expect( 400, done );

        } );

        it( 'should validate 0 <= 0', function( done ) {

            app.use( function *() {

                this.checkBody( 'less' ).isNumber().lessThanEqual( 0 );

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
                    less: 0
                })
                .expect( 200, done );

        } );

    });

    describe( 'le', function() {

        it( 'should validate 0 <= 1', function( done ) {

            app.use( function *() {

                this.checkBody( 'less' ).isNumber().le( 1 );

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
                    less: 0
                })
                .expect( 200, done );

        } );

        it( 'should validate 0 <= 0.1', function( done ) {

            app.use( function *() {

                this.checkBody( 'less' ).isNumber().le( 0.1 );

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
                    less: 0
                })
                .expect( 200, done );

        } );

        it( 'should not validate 0 <= -1', function( done ) {

            app.use( function *() {

                this.checkBody( 'less' ).isNumber().le( -1 );

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
                    less: 0
                })
                .expect( 400, done );

        } );

        it( 'should validate 0 <= 0', function( done ) {

            app.use( function *() {

                this.checkBody( 'less' ).isNumber().le( 0 );

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
                    less: 0
                })
                .expect( 200, done );

        } );

    });

});