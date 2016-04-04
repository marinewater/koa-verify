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

    describe( 'isInteger', function() {

        it( 'should validate an integer', function( done ) {

            app.use( function *() {

                this.checkBody( 'integer' ).isInteger();

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
                    integer: 1
                })
                .expect( 200, done );

        } );

        it( 'should not validate a string', function( done ) {

            app.use( function *() {

                this.checkBody( 'integer' ).isInteger();

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
                    integer: '1'
                })
                .expect( 400, done );

        } );
        
        it( 'should not validate null', function( done ) {

            app.use( function *() {

                this.checkBody( 'integer' ).isInteger();

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
                    integer: null
                })
                .expect( 400, done );

        } );

        it( 'should not validate undefined', function( done ) {

            app.use( function *() {

                this.checkBody( 'integer' ).isInteger();

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
                    integer: undefined
                })
                .expect( 400, done );

        } );

        it( 'should not validate an empty body', function( done ) {

            app.use( function *() {

                this.checkBody( 'integer' ).isInteger();

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

    describe( 'isInt', function() {

        it( 'should validate an integer', function( done ) {

            app.use( function *() {

                this.checkBody( 'integer' ).isInt();

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
                    integer: 1
                })
                .expect( 200, done );

        } );

        it( 'should validate zero', function( done ) {

            app.use( function *() {

                this.checkBody( 'integer' ).isInt();

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
                    integer: 0
                })
                .expect( 200, done );

        } );

        it( 'should validate a negative value', function( done ) {

            app.use( function *() {

                this.checkBody( 'integer' ).isInt();

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
                    integer: -1
                })
                .expect( 200, done );

        } );

        it( 'should not validate a float', function( done ) {

            app.use( function *() {

                this.checkBody( 'integer' ).isInt();

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
                    integer: 0.1
                })
                .expect( 400, done );

        } );

        it( 'should not validate a string', function( done ) {

            app.use( function *() {

                this.checkBody( 'integer' ).isInt();

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
                    integer: '1'
                })
                .expect( 400, done );

        } );

        it( 'should not validate null', function( done ) {

            app.use( function *() {

                this.checkBody( 'integer' ).isInt();

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
                    integer: null
                })
                .expect( 400, done );

        } );

        it( 'should not validate undefined', function( done ) {

            app.use( function *() {

                this.checkBody( 'integer' ).isInt();

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
                    integer: undefined
                })
                .expect( 400, done );

        } );

        it( 'should not validate an empty body', function( done ) {

            app.use( function *() {

                this.checkBody( 'integer' ).isInt();

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