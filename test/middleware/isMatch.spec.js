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

        it( 'should throw an error if no regular expression is provided', function( done ) {

            app.use( function *() {

                try {
                    this.checkBody( 'match' ).isMatch();
                }
                catch( e ) {
                    this.status = 500;
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
                    match: true
                })
                .expect( 500, done );

        } );

        it( 'should validate if the regular expression matches', function( done ) {

            app.use( function *() {

                this.checkBody( 'match' ).isMatch( {
                    regex: /^a$/
                });

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
                    match: 'a'
                })
                .expect( 200, done );

        } );

        it( 'should fail if the regular expression doe snot match', function( done ) {

            app.use( function *() {

                this.checkBody( 'match' ).isMatch( {
                    regex: /^b$/
                });

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
                    match: 'a'
                })
                .expect( 400, done );

        } );

        it( 'should fail if the value is null', function( done ) {

            app.use( function *() {

                this.checkBody( 'match' ).isMatch( {
                    regex: /^a$/
                });

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
                    match: null
                })
                .expect( 400, done );

        } );

        it( 'should fail if the value is undefined', function( done ) {

            app.use( function *() {

                this.checkBody( 'match' ).isMatch( {
                    regex: /^a$/
                });

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
                    match: undefined
                })
                .expect( 400, done );

        } );

        it( 'should fail if the body is empty', function( done ) {

            app.use( function *() {

                this.checkBody( 'match' ).isMatch( {
                    regex: /^a$/
                });

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