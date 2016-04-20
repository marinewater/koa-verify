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

    describe( 'lessThan', function() {

        it( 'should validate 0 < 1', function( done ) {

            app.use( function *() {

                this.checkBody( 'less' ).isNumber().lessThan( 1 );

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

        it( 'should validate 0 < 0.1', function( done ) {

            app.use( function *() {

                this.checkBody( 'less' ).isNumber().lessThan( 0.1 );

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

        it( 'should not validate 0 < -1', function( done ) {

            app.use( function *() {

                this.checkBody( 'less' ).isNumber().lessThan( -1 );

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

        it( 'should not validate 0 < 0', function( done ) {

            app.use( function *() {

                this.checkBody( 'less' ).isNumber().lessThan( 0 );

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

    });

    describe( 'lt', function() {

        it( 'should validate 0 < 1', function( done ) {

            app.use( function *() {

                this.checkBody( 'less' ).isNumber().lt( 1 );

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

        it( 'should validate 0 < 0.1', function( done ) {

            app.use( function *() {

                this.checkBody( 'less' ).isNumber().lt( 0.1 );

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

        it( 'should not validate 0 < -1', function( done ) {

            app.use( function *() {

                this.checkBody( 'less' ).isNumber().lt( -1 );

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

        it( 'should not validate 0 < 0', function( done ) {

            app.use( function *() {

                this.checkBody( 'less' ).isNumber().lt( 0 );

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

    });

});