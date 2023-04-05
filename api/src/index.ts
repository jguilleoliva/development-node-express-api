/*--- SETTINGS ---*/
import { port, stage }         from './settings-configuration';
/*--- IMPORTS ---*/
import express                 from 'express';
import helmet                  from 'helmet';
import cors                    from 'cors';
import morgan                  from 'morgan';
/*--- EXPRESS-APP ---*/
const app: express.Application = express();
/*--- MODULES ---*/
import moduleFrameworkCommon   from './module-framework-common/index';
import moduleFrameworkSecurity from './module-framework-security';
import moduleCoreContent       from './module-core-content';
import moduleCoreCommon        from './module-core-common';
import moduleCoreUsers         from './module-core-users';
import moduleEmail             from './module-email';
import moduleWebsite           from './module-website';
/*--- VIEW-ENGINE ---*/
app.set( 'view engine', 'ejs' );
/*--- MIDDLEWARE-MODULES ---*/
/*--- CONFIGURE-EXPRESS-APP ---*/
app.use( express.json( { limit: '4mb' } ) ); 				//--- RECEIVE JSON POSTS, CONFIGURE MAXIMUM REQUEST SIZE
app.use( express.urlencoded( { extended: true } ) );		//--- RECEIVE URL-ENCONDED POSTS
/*--- API-SECURITY-POLICIES ---*/
if( stage === 'PRODUCTION' ) {
	app.use( helmet( {} ) );
	app.use( helmet.hidePoweredBy() );
	app.use( helmet.crossOriginResourcePolicy( { policy: 'cross-origin' } ) );
	app.use( helmet.crossOriginOpenerPolicy( { policy: 'unsafe-none' } ) );
	app.use( helmet.contentSecurityPolicy( {
		useDefaults: true,
		directives:  {},
		reportOnly:  true,
	} ) );
}
/*--- CONFIGURATION-FUNCTIONS ---*/
app.use( cors() );							//--- CORS FOR ALL REQUEST
app.use( morgan( 'combined' ) );		//--- LOGGING HTTP/HTTPS REQUESTS
/*--- END-POINTS ---*/
app.use( '/', moduleFrameworkCommon, express.json( { limit: '2mb' } ) );		//---
app.use( '/', moduleFrameworkSecurity, express.json( { limit: '2mb' } ) );		//---
app.use( '/', moduleCoreContent, express.json( { limit: '2mb' } ) );			//---
app.use( '/', moduleCoreUsers, express.json( { limit: '2mb' } ) );				//---
app.use( '/', moduleCoreCommon, express.json( { limit: '2mb' } ) );				//---
app.use( '/', moduleEmail, express.json( { limit: '2mb' } ) );					//---
app.use( '/', moduleWebsite, express.json( { limit: '2mb' } ) );				//---
/*--- STATIC-FILES ---*/
app.use( '/resourceUSERCONTENT', express.static( __dirname + '/../../resourceUSERCONTENT' ) );
app.use( '/static', express.static( __dirname + '/../../static' ) );
/*--- 404-REDIRECT ---*/
app.use( ( request, response, next ) => {
	response.status( 404 ).render( 'website-error', {
		stringWebsiteTitle: 'Error | La dirección no fue encontrada',
	} );
} );
/*--- SERVER-CONFIGURATION ---*/
app.listen( port, () => {
	console.log( `log::listening -> port ${ port }` );
} );
