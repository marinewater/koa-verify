'use strict';

const supertest = require( 'supertest' );
const assert = require( 'chai' ).assert;

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

    describe( 'optional', function() {

        it( 'should validate undefined', function( done ) {

            app.use( function *() {

                this.checkBody( 'boolean' ).optional().isBoolean();

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
                .expect( 200, done );

        } );

        it( 'should set a default value if value is undefined', function( done ) {

            app.use( function *() {

                this.checkBody( 'boolean' ).optional( false ).isBoolean();

                if ( this.errors ) {
                    this.status = 400;
                }
                else {
                    assert.isFalse( this.request.body.boolean );
                    this.status = 200;
                }

            });

            let request = supertest( app.listen() );

            request.post( '/' )
                .send()
                .expect( 200, done );

        } );

        it( 'should not set a default value if value is not undefined', function( done ) {

            app.use( function *() {

                this.checkBody( 'boolean' ).optional( false ).isBoolean();

                if ( this.errors ) {
                    this.status = 400;
                }
                else {
                    assert.isTrue( this.request.body.boolean );
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

        it( 'should not set a default value if query param is not present', function( done ) {

            app.use( function *() {

                this.checkQuery( 'boolean' ).optional( false ).isBoolean();

                if ( this.errors ) {
                    this.status = 400;
                }
                else {
                    assert.isFalse( this.request.query.boolean );
                    this.status = 200;
                }

            });

            let request = supertest( app.listen() );

            request.get( '/' )
                .expect( 200, done );

        } );

        it( 'should fail a test if a default value is provided', function( done ) {

            app.use( function *() {

                this.checkBody( 'boolean' ).optional( false ).isBoolean();

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

        it( 'should validate with no argument', function( done ) {

            app.use( function *() {

                this.checkBody( 'boolean' ).optional().isBoolean();

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
                .expect( 200, done );

        } );

        it( 'should validate true', function( done ) {

            app.use( function *() {

                this.checkBody( 'boolean' ).optional().isBoolean();

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

                this.checkBody( 'boolean' ).optional().isBoolean();

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

                this.checkBody( 'boolean' ).optional().isBoolean();

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

        it( 'should throw an error if the validator chain is in the wrong order', function( done ) {

            app.use( function *() {

                try {
                    this.checkBody( 'boolean' ).isBoolean().optional();
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