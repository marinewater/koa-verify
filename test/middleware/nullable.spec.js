'use strict';

const supertest = require( 'supertest' );

const koa = require( 'koa' );
const koa_body = require( 'koa-body' );
const koa_router = require( 'koa-router' );

const middleware = require( '../../lib/middleware' )();

describe( 'middleware', function() {

    let app;

    beforeEach( function() {

        app = koa();
        app.use( koa_body() );
        app.use( middleware );

    });

    describe( 'nullable', function() {

        describe( 'checkBody', function() {

            it( 'should validate null', function( done ) {

                app.use( function *() {

                    this.checkBody( 'boolean' ).nullable().isBoolean();

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
                    .expect( 200, done );

            } );

            it( 'should validate true', function( done ) {

                app.use( function *() {

                    this.checkBody( 'boolean' ).nullable().isBoolean();

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

            it( 'should validate false', function( done ) {

                app.use( function *() {

                    this.checkBody( 'boolean' ).nullable().isBoolean();

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
                        boolean: false
                    })
                    .expect( 200, done );

            } );

            it( 'should not validate undefined', function( done ) {

                app.use( function *() {

                    this.checkBody( 'boolean' ).nullable().isBoolean();

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

            it( 'should not validate "null"', function( done ) {

                app.use( function *() {

                    this.checkBody( 'boolean' ).nullable().isBoolean();

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
                        boolean: 'null'
                    })
                    .expect( 400, done );

            } );

            it( 'should throw an error if the validator chain is in the wrong order', function( done ) {

                app.use( function *() {

                    try {
                        this.checkBody( 'boolean' ).isBoolean().nullable();
                    }
                    catch( e ) {
                        this.status = 500;
                        this.body = e.id;
                        return;
                    }

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
                    .expect( 500 )
                    .expect( function( res ) {

                        if ( res.text !== 'modifier_order_error' ) {
                            throw res.text;
                        }

                    })
                    .end( done );

            } );

        });

        describe( 'checkParams', function() {

            it( 'should validate null', function( done ) {

                let router = koa_router();

                router.get( '/:_null', function *() {

                    this.checkParams( '_null' ).nullable().isBoolean();

                    if ( this.errors ) {
                        this.status = 400;
                    }
                    else {
                        this.status = 200;
                    }

                });

                app.use( router.routes() );

                let request = supertest( app.listen() );

                request.get( '/null' )
                    .expect( 200 )
                    .end( done );

            } );

            it( 'should validate "true"', function( done ) {

                let router = koa_router();

                router.get( '/:boolean', function *() {

                    this.checkParams( 'boolean' ).nullable().isBoolean();

                    if ( this.errors ) {
                        this.status = 400;
                    }
                    else {
                        this.status = 200;
                    }

                });

                app.use( router.routes() );

                let request = supertest( app.listen() );

                request.get( '/true' )
                    .expect( 200, done );

            } );

            it( 'should validate "false"', function( done ) {

                let router = koa_router();

                router.get( '/:boolean', function *() {

                    this.checkParams( 'boolean' ).nullable().isBoolean();

                    if ( this.errors ) {
                        this.status = 400;
                    }
                    else {
                        this.status = 200;
                    }

                });

                app.use( router.routes() );

                let request = supertest( app.listen() );

                request.get( '/false' )
                    .expect( 200, done );

            } );

            it( 'should not validate "undefined"', function( done ) {

                let router = koa_router();

                router.get( '/:boolean', function *() {

                    this.checkParams( 'boolean' ).nullable().isBoolean();

                    if ( this.errors ) {
                        this.status = 400;
                    }
                    else {
                        this.status = 200;
                    }

                });

                app.use( router.routes() );

                let request = supertest( app.listen() );

                request.get( '/undefined' )
                    .expect( 400, done );

            } );

            it( 'should throw an error if the validator chain is in the wrong order', function( done ) {

                let router = koa_router();

                router.get( '/:_null', function *() {

                    try {
                        this.checkParams( '_null' ).isBoolean().nullable();
                    }
                    catch( e ) {
                        this.status = 500;
                        this.body = e.id;
                        return;
                    }

                    if ( this.errors ) {
                        this.status = 400;
                    }
                    else {
                        this.status = 200;
                    }

                });

                app.use( router.routes() );

                let request = supertest( app.listen() );

                request.get( '/null' )
                    .expect( 500 )
                    .end( done );

            } );

        });

    });

});