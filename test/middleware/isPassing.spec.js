'use strict';

const supertest = require( 'supertest' );

const koa = require( 'koa' );
const koa_body = require( 'koa-body' );

const middleware = require( '../../lib/middleware' )();

describe( 'middleware isPassing', function() {

    let app;

    beforeEach( function() {

        app = koa();
        app.use( koa_body() );
        app.use( middleware );

    });

    describe( 'default options', function() {

        it( 'should validate with a function returning true', function( done ) {

            app.use( function *() {

                this.checkBody( 'passing' ).isPassing( ( val ) => val === true );

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
                    passing: true
                })
                .expect( 200, done );

        } );

        it( 'should not validate with a function returning false', function( done ) {

            app.use( function *() {

                this.checkBody( 'passing' ).isPassing( ( val ) => val === true );

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
                    passing: false
                })
                .expect( 400, done );

        } );

        it( 'should throw an error if test function does not return a boolean', function( done ) {

            app.use( function *() {

                try {
                    this.checkBody( 'passing' ).isPassing( ( val ) => '' );
                }
                catch( e ) {
                    if ( e instanceof TypeError ) {
                        this.status = 501;
                        return;
                    }
                    else {
                        throw 'isPassing did not return a TypeError'
                    }
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
                    passing: false
                })
                .expect( 501, done );

        } );

    });

    describe( 'strict mode off', function() {

        const options = {
            strict: false
        };

        it( 'should validate with a function returning true', function( done ) {

            app.use( function *() {

                this.checkBody( 'passing' ).isPassing( ( val ) => val === true, options );

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
                    passing: true
                })
                .expect( 200, done );

        } );

        it( 'should not validate with a function returning false', function( done ) {

            app.use( function *() {

                this.checkBody( 'passing' ).isPassing( ( val ) => val === true, options );

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
                    passing: false
                })
                .expect( 400, done );

        } );

        it( 'should not validate if an empty string is passed', function( done ) {

            app.use( function *() {

                this.checkBody( 'passing' ).isPassing( ( val ) => '', options );

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
                    passing: false
                })
                .expect( 400, done );

        } );

        it( 'should validate if a string is passed', function( done ) {

            app.use( function *() {

                this.checkBody( 'passing' ).isPassing( ( val ) => 'a', options );

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
                    passing: false
                })
                .expect( 200, done );

        } );

    });

});