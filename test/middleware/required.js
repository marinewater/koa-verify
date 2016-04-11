'use strict';

const supertest = require( 'supertest' );

const koa = require( 'koa' );
const koa_body = require( 'koa-body' );

const middleware = require( '../../lib/middleware' )();


describe( 'required middleware', function() {

    let app;

    beforeEach( function() {

        app = koa();
        app.use( koa_body() );
        app.use( middleware );

    });

    describe( 'default options', function() {

        it( 'should not validate undefined', function( done ) {

            app.use( function *() {

                this.checkBody( 'boolean' ).required().isBoolean();

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
                .expect( 400, done )

        } );

        it( 'should not validate with no argument', function( done ) {

            app.use( function *() {

                this.checkBody( 'boolean' ).required().isBoolean();

                if ( this.errors ) {
                    this.status = 400;
                }
                else {
                    this.status = 200;
                }

            });

            let request = supertest( app.listen() );

            request.post( '/' )
                .send()
                .expect( 400, done );

        } );

        it( 'should validate true', function( done ) {

            app.use( function *() {

                this.checkBody( 'boolean' ).required().isBoolean();

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

                this.checkBody( 'boolean' ).required().isBoolean();

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

        it( 'should not validate "undefined"', function( done ) {

            app.use( function *() {

                this.checkBody( 'boolean' ).required().isBoolean();

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
                    boolean: 'undefined'
                })
                .expect( 400, done );

        } );

        it( 'should validate an empty string', function( done ) {

            app.use( function *() {

                this.checkBody( 'string' ).required().isString();

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

        it( 'should throw an error if the validator chain is in the wrong order', function( done ) {

            app.use( function *() {

                try {
                    this.checkBody( 'boolean' ).isBoolean().required();
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

    describe( 'allow empty string set to false', function() {

        const options = {
            allowEmptyString: false
        };

        it( 'should not validate undefined', function( done ) {

            app.use( function *() {

                this.checkBody( 'boolean' ).required( options ).isBoolean();

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
                .expect( 400, done )

        } );

        it( 'should not validate with no argument', function( done ) {

            app.use( function *() {

                this.checkBody( 'boolean' ).required( options ).isBoolean();

                if ( this.errors ) {
                    this.status = 400;
                }
                else {
                    this.status = 200;
                }

            });

            let request = supertest( app.listen() );

            request.post( '/' )
                .send()
                .expect( 400, done );

        } );

        it( 'should validate true', function( done ) {

            app.use( function *() {

                this.checkBody( 'boolean' ).required( options ).isBoolean();

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

                this.checkBody( 'boolean' ).required( options ).isBoolean();

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

        it( 'should not validate "undefined"', function( done ) {

            app.use( function *() {

                this.checkBody( 'boolean' ).required( options ).isBoolean();

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
                    boolean: 'undefined'
                })
                .expect( 400, done );

        } );

        it( 'should not validate an empty string', function( done ) {

            app.use( function *() {

                this.checkBody( 'string' ).required( options ).isString();

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
                .expect( 400, done );

        } );

        it( 'should throw an error if the validator chain is in the wrong order', function( done ) {

            app.use( function *() {

                try {
                    this.checkBody( 'boolean' ).isBoolean().required( options );
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

});