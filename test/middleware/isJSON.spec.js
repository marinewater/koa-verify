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

    describe( 'isJSON', function() {

        describe( 'objects', function() {

            const options = {
                allowObject: true,
                allowString: false
            };

            it( 'should validate an empty object', function( done ) {

                app.use( function *() {

                    this.checkBody( 'json' ).isJSON( options );

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
                        json: {}
                    })
                    .expect( 200, done );

            });

            it( 'should validate an object', function( done ) {

                app.use( function *() {

                    this.checkBody( 'json' ).isJSON( options );

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
                        json: {
                            array: [ 'a', 'b', 'c' ],
                            _null: null,
                            bool: true
                        }
                    })
                    .expect( 200, done );

            });

            it( 'should not validate an array', function( done ) {

                app.use( function *() {

                    this.checkBody( 'json' ).isJSON( options );

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
                        json: []
                    })
                    .expect( 400, done );

            });

            it( 'should not validate stringified JSON', function( done ) {

                app.use( function *() {

                    this.checkBody( 'json' ).isJSON( options );

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
                        json: '{}'
                    })
                    .expect( 400, done );

            });

            it( 'should not validate null', function( done ) {

                app.use( function *() {

                    this.checkBody( 'json' ).isJSON( options );

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
                        json: null
                    })
                    .expect( 400, done );

            });

            it( 'should not validate undefined', function( done ) {

                app.use( function *() {

                    this.checkBody( 'json' ).isJSON( options );

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
                        json: undefined
                    })
                    .expect( 400, done );

            });

            it( 'should not validate an empty body', function( done ) {

                app.use( function *() {

                    this.checkBody( 'json' ).isJSON( options );

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

            });

        });

        describe( 'allowString', function() {

            const options = {
                allowObject: false,
                allowString: true
            };

            it( 'should not validate an empty object', function( done ) {

                app.use( function *() {

                    this.checkBody( 'json' ).isJSON( options );

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
                        json: {}
                    })
                    .expect( 400, done );

            });

            it( 'should not validate an object', function( done ) {

                app.use( function *() {

                    this.checkBody( 'json' ).isJSON( options );

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
                        json: {
                            array: [ 'a', 'b', 'c' ],
                            _null: null,
                            bool: true
                        }
                    })
                    .expect( 400, done );

            });

            it( 'should not validate an array', function( done ) {

                app.use( function *() {

                    this.checkBody( 'json' ).isJSON( options );

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
                        json: []
                    })
                    .expect( 400, done );

            });

            it( 'should validate a stringified object', function( done ) {

                app.use( function *() {

                    this.checkBody( 'json' ).isJSON( options );

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
                        json: '{}'
                    })
                    .expect( 200, done );

            });

            it( 'should validate a stringified array', function( done ) {

                app.use( function *() {

                    this.checkBody( 'json' ).isJSON( options );

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
                        json: '[]'
                    })
                    .expect( 200, done );

            });

            it( 'should not validate null', function( done ) {

                app.use( function *() {

                    this.checkBody( 'json' ).isJSON( options );

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
                        json: null
                    })
                    .expect( 400, done );

            });

            it( 'should not validate undefined', function( done ) {

                app.use( function *() {

                    this.checkBody( 'json' ).isJSON( options );

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
                        json: undefined
                    })
                    .expect( 400, done );

            });

            it( 'should not validate an empty body', function( done ) {

                app.use( function *() {

                    this.checkBody( 'json' ).isJSON( options );

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

            });

        });
    });

});