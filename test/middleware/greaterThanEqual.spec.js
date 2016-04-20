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

    describe( 'greaterThanEqual', function() {

        it( 'should validate 1 >= 0', function( done ) {

            app.use( function *() {

                this.checkBody( 'greater' ).isNumber().greaterThanEqual( 0 );

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
                    greater: 1
                })
                .expect( 200, done );

        } );

        it( 'should validate 1 > 0.1', function( done ) {

            app.use( function *() {

                this.checkBody( 'greater' ).isNumber().greaterThanEqual( 0.1 );

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
                    greater: 1
                })
                .expect( 200, done );

        } );

        it( 'should validate -0.1 > -0.2', function( done ) {

            app.use( function *() {

                this.checkBody( 'greater' ).isNumber().greaterThanEqual( -0.2 );

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
                    greater: -0.1
                })
                .expect( 200, done );

        } );

        it( 'should validate 0.1 >= 0', function( done ) {

            app.use( function *() {

                this.checkBody( 'greater' ).isNumber().greaterThanEqual( 0 );

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
                    greater: 0.1
                })
                .expect( 200, done );

        } );

        it( 'should not validate -1 >= 0', function( done ) {

            app.use( function *() {

                this.checkBody( 'greater' ).isNumber().greaterThanEqual( 0 );

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
                    greater: -1
                })
                .expect( 400, done );

        } );

        it( 'should validate 0 >= 0', function( done ) {

            app.use( function *() {

                this.checkBody( 'greater' ).isNumber().greaterThanEqual( 0 );

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
                    greater: 0
                })
                .expect( 200, done );

        } );

    });

    describe( 'gt', function() {

        it( 'should validate 1 >= 0', function( done ) {

            app.use( function *() {

                this.checkBody( 'greater' ).isNumber().ge( 0 );

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
                    greater: 1
                })
                .expect( 200, done );

        } );

        it( 'should validate 1 > 0.1', function( done ) {

            app.use( function *() {

                this.checkBody( 'greater' ).isNumber().ge( 0.1 );

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
                    greater: 1
                })
                .expect( 200, done );

        } );

        it( 'should validate -0.1 > -0.2', function( done ) {

            app.use( function *() {

                this.checkBody( 'greater' ).isNumber().ge( -0.2 );

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
                    greater: -0.1
                })
                .expect( 200, done );

        } );

        it( 'should validate 0.1 >= 0', function( done ) {

            app.use( function *() {

                this.checkBody( 'greater' ).isNumber().ge( 0 );

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
                    greater: 0.1
                })
                .expect( 200, done );

        } );

        it( 'should not validate -1 >= 0', function( done ) {

            app.use( function *() {

                this.checkBody( 'greater' ).isNumber().ge( 0 );

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
                    greater: -1
                })
                .expect( 400, done );

        } );

        it( 'should validate 0 >= 0', function( done ) {

            app.use( function *() {

                this.checkBody( 'greater' ).isNumber().ge( 0 );

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
                    greater: 0
                })
                .expect( 200, done );

        } );

    });

});