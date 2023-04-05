/*--- IMPORTS ---*/
import express    from 'express';
/*--- MODULES ---*/
import handlebars from 'handlebars';
import fs         from 'fs';
import path       from 'path';
/*--- VARIABLES ---*/
/*--- PARTIALS ---*/
const partialCommonHeader     = fs.readFileSync( path.join( __dirname, './website-partials/partial-common-header.hbs' ), 'utf8' );
const partialCommonNavigation = fs.readFileSync( path.join( __dirname, './website-partials/partial-common-navigation.hbs' ), 'utf8' );
const partialCommonFooter     = fs.readFileSync( path.join( __dirname, './website-partials/partial-common-footer.hbs' ), 'utf8' );
/*--- COMPILE PARTIALS ---*/
handlebars.registerPartial( 'partialCommonHeader', handlebars.compile( partialCommonHeader ) );
handlebars.registerPartial( 'partialCommonNavigation', handlebars.compile( partialCommonNavigation ) );
handlebars.registerPartial( 'partialCommonFooter', handlebars.compile( partialCommonFooter ) );
/*--- ROUTER ---*/
const router = express.Router();
router.get( '/', async( request, response ) => {
	const websiteTemplateFilePath = fs.readFileSync( path.join( __dirname, './website-templates/index.hbs' ), 'utf-8' );
	const compiledTemplateFile    = handlebars.compile( websiteTemplateFilePath );
	const pathResourceUSERCONTENT = request.protocol + ':/' + request.get( 'host' ) + '/resourceUSERCONTENT/';
	const processedHTML           = compiledTemplateFile( { pathResourceUSERCONTENT: pathResourceUSERCONTENT, htmlTagTitle: 'INICIO', htmlMetaTagDescription: 'Lorem Ipsum Dolot Amet' } );
	response.status( 200 ).send( processedHTML ).end();
} ).get( '/index.html', async( request, response ) => {
	const websiteTemplateFilePath = fs.readFileSync( path.join( __dirname, './website-templates/index.hbs' ), 'utf-8' );
	const compiledTemplateFile    = handlebars.compile( websiteTemplateFilePath );
	const pathResourceUSERCONTENT = request.protocol + ':/' + request.get( 'host' ) + '/resourceUSERCONTENT/';
	const processedHTML           = compiledTemplateFile( { pathResourceUSERCONTENT: pathResourceUSERCONTENT, htmlTagTitle: 'INICIO', htmlMetaTagDescription: 'Lorem Ipsum Dolot Amet' } );
	response.status( 200 ).send( processedHTML ).end();
} ).get( '/home-page.html', async( request, response ) => {
	const websiteTemplateFilePath = fs.readFileSync( path.join( __dirname, './website-templates/home-page.hbs' ), 'utf-8' );
	const compiledTemplateFile    = handlebars.compile( websiteTemplateFilePath );
	const pathResourceUSERCONTENT = request.protocol + ':/' + request.get( 'host' ) + '/resourceUSERCONTENT/';
	const processedHTML           = compiledTemplateFile( { pathResourceUSERCONTENT: pathResourceUSERCONTENT, htmlTagTitle: 'HOMEPAGE', htmlMetaTagDescription: 'Lorem Ipsum Dolot Amet' } );
	response.status( 200 ).send( processedHTML ).end();
} ).get( '/home-page--fsv.html', async( request, response ) => {
	const websiteTemplateFilePath = fs.readFileSync( path.join( __dirname, './website-templates/home-page--fsv.hbs' ), 'utf-8' );
	const compiledTemplateFile    = handlebars.compile( websiteTemplateFilePath );
	const pathResourceUSERCONTENT = request.protocol + ':/' + request.get( 'host' ) + '/resourceUSERCONTENT/';
	const processedHTML           = compiledTemplateFile( { pathResourceUSERCONTENT: pathResourceUSERCONTENT, htmlTagTitle: 'HOMEPAGE', htmlMetaTagDescription: 'Lorem Ipsum Dolot Amet' } );
	response.status( 200 ).send( processedHTML ).end();
} ).get( '/home-page--fw.html', async( request, response ) => {
	const websiteTemplateFilePath = fs.readFileSync( path.join( __dirname, './website-templates/home-page--fw.hbs' ), 'utf-8' );
	const compiledTemplateFile    = handlebars.compile( websiteTemplateFilePath );
	const pathResourceUSERCONTENT = request.protocol + ':/' + request.get( 'host' ) + '/resourceUSERCONTENT/';
	const processedHTML           = compiledTemplateFile( { pathResourceUSERCONTENT: pathResourceUSERCONTENT, htmlTagTitle: 'HOMEPAGE', htmlMetaTagDescription: 'Lorem Ipsum Dolot Amet' } );
	response.status( 200 ).send( processedHTML ).end();
} ).get( '/home-page--rs1.html', async( request, response ) => {
	const websiteTemplateFilePath = fs.readFileSync( path.join( __dirname, './website-templates/home-page--rs1.hbs' ), 'utf-8' );
	const compiledTemplateFile    = handlebars.compile( websiteTemplateFilePath );
	const pathResourceUSERCONTENT = request.protocol + ':/' + request.get( 'host' ) + '/resourceUSERCONTENT/';
	const processedHTML           = compiledTemplateFile( { pathResourceUSERCONTENT: pathResourceUSERCONTENT, htmlTagTitle: 'HOMEPAGE', htmlMetaTagDescription: 'Lorem Ipsum Dolot Amet' } );
	response.status( 200 ).send( processedHTML ).end();
} ).get( '/home-page--rs2.html', async( request, response ) => {
	const websiteTemplateFilePath = fs.readFileSync( path.join( __dirname, './website-templates/home-page--rs2.hbs' ), 'utf-8' );
	const compiledTemplateFile    = handlebars.compile( websiteTemplateFilePath );
	const pathResourceUSERCONTENT = request.protocol + ':/' + request.get( 'host' ) + '/resourceUSERCONTENT/';
	const processedHTML           = compiledTemplateFile( { pathResourceUSERCONTENT: pathResourceUSERCONTENT, htmlTagTitle: 'HOMEPAGE', htmlMetaTagDescription: 'Lorem Ipsum Dolot Amet' } );
	response.status( 200 ).send( processedHTML ).end();
} ).get( '/home-page--red.html', async( request, response ) => {
	const websiteTemplateFilePath = fs.readFileSync( path.join( __dirname, './website-templates/home-page--red.hbs' ), 'utf-8' );
	const compiledTemplateFile    = handlebars.compile( websiteTemplateFilePath );
	const pathResourceUSERCONTENT = request.protocol + ':/' + request.get( 'host' ) + '/resourceUSERCONTENT/';
	const processedHTML           = compiledTemplateFile( { pathResourceUSERCONTENT: pathResourceUSERCONTENT, htmlTagTitle: 'HOMEPAGE', htmlMetaTagDescription: 'Lorem Ipsum Dolot Amet' } );
	response.status( 200 ).send( processedHTML ).end();
} ).get( '/home-page--yellow.html', async( request, response ) => {
	const websiteTemplateFilePath = fs.readFileSync( path.join( __dirname, './website-templates/home-page--yellow.hbs' ), 'utf-8' );
	const compiledTemplateFile    = handlebars.compile( websiteTemplateFilePath );
	const pathResourceUSERCONTENT = request.protocol + ':/' + request.get( 'host' ) + '/resourceUSERCONTENT/';
	const processedHTML           = compiledTemplateFile( { pathResourceUSERCONTENT: pathResourceUSERCONTENT, htmlTagTitle: 'HOMEPAGE', htmlMetaTagDescription: 'Lorem Ipsum Dolot Amet' } );
	response.status( 200 ).send( processedHTML ).end();
} ).get( '/search-results--left-sidebar.html', async( request, response ) => {
	const websiteTemplateFilePath = fs.readFileSync( path.join( __dirname, './website-templates/search-results--left-sidebar.hbs' ), 'utf-8' );
	const compiledTemplateFile    = handlebars.compile( websiteTemplateFilePath );
	const pathResourceUSERCONTENT = request.protocol + ':/' + request.get( 'host' ) + '/resourceUSERCONTENT/';
	const processedHTML           = compiledTemplateFile( { pathResourceUSERCONTENT: pathResourceUSERCONTENT, htmlTagTitle: 'HOMEPAGE', htmlMetaTagDescription: 'Lorem Ipsum Dolot Amet' } );
	response.status( 200 ).send( processedHTML ).end();
} ).get( '/search-results--no-sidebar.html', async( request, response ) => {
	const websiteTemplateFilePath = fs.readFileSync( path.join( __dirname, './website-templates/search-results--no-sidebar.hbs' ), 'utf-8' );
	const compiledTemplateFile    = handlebars.compile( websiteTemplateFilePath );
	const pathResourceUSERCONTENT = request.protocol + ':/' + request.get( 'host' ) + '/resourceUSERCONTENT/';
	const processedHTML           = compiledTemplateFile( { pathResourceUSERCONTENT: pathResourceUSERCONTENT, htmlTagTitle: 'HOMEPAGE', htmlMetaTagDescription: 'Lorem Ipsum Dolot Amet' } );
	response.status( 200 ).send( processedHTML ).end();
} ).get( '/search-results--right-sidebar.html', async( request, response ) => {
	const websiteTemplateFilePath = fs.readFileSync( path.join( __dirname, './website-templates/search-results--right-sidebar.hbs' ), 'utf-8' );
	const compiledTemplateFile    = handlebars.compile( websiteTemplateFilePath );
	const pathResourceUSERCONTENT = request.protocol + ':/' + request.get( 'host' ) + '/resourceUSERCONTENT/';
	const processedHTML           = compiledTemplateFile( { pathResourceUSERCONTENT: pathResourceUSERCONTENT, htmlTagTitle: 'HOMEPAGE', htmlMetaTagDescription: 'Lorem Ipsum Dolot Amet' } );
	response.status( 200 ).send( processedHTML ).end();
} ).get( '/search-results--3-col.html', async( request, response ) => {
	const websiteTemplateFilePath = fs.readFileSync( path.join( __dirname, './website-templates/search-results--3-col.hbs' ), 'utf-8' );
	const compiledTemplateFile    = handlebars.compile( websiteTemplateFilePath );
	const pathResourceUSERCONTENT = request.protocol + ':/' + request.get( 'host' ) + '/resourceUSERCONTENT/';
	const processedHTML           = compiledTemplateFile( { pathResourceUSERCONTENT: pathResourceUSERCONTENT, htmlTagTitle: 'HOMEPAGE', htmlMetaTagDescription: 'Lorem Ipsum Dolot Amet' } );
	response.status( 200 ).send( processedHTML ).end();
} ).get( '/about.html', async( request, response ) => {
	const websiteTemplateFilePath = fs.readFileSync( path.join( __dirname, './website-templates/about.hbs' ), 'utf-8' );
	const compiledTemplateFile    = handlebars.compile( websiteTemplateFilePath );
	const pathResourceUSERCONTENT = request.protocol + ':/' + request.get( 'host' ) + '/resourceUSERCONTENT/';
	const processedHTML           = compiledTemplateFile( { pathResourceUSERCONTENT: pathResourceUSERCONTENT, htmlTagTitle: 'HOMEPAGE', htmlMetaTagDescription: 'Lorem Ipsum Dolot Amet' } );
	response.status( 200 ).send( processedHTML ).end();
} ).get( '/contact.html', async( request, response ) => {
	const websiteTemplateFilePath = fs.readFileSync( path.join( __dirname, './website-templates/contact.hbs' ), 'utf-8' );
	const compiledTemplateFile    = handlebars.compile( websiteTemplateFilePath );
	const pathResourceUSERCONTENT = request.protocol + ':/' + request.get( 'host' ) + '/resourceUSERCONTENT/';
	const processedHTML           = compiledTemplateFile( { pathResourceUSERCONTENT: pathResourceUSERCONTENT, htmlTagTitle: 'HOMEPAGE', htmlMetaTagDescription: 'Lorem Ipsum Dolot Amet' } );
	response.status( 200 ).send( processedHTML ).end();
} ).get( '/contact--v2.html', async( request, response ) => {
	const websiteTemplateFilePath = fs.readFileSync( path.join( __dirname, './website-templates/contact--v2.hbs' ), 'utf-8' );
	const compiledTemplateFile    = handlebars.compile( websiteTemplateFilePath );
	const pathResourceUSERCONTENT = request.protocol + ':/' + request.get( 'host' ) + '/resourceUSERCONTENT/';
	const processedHTML           = compiledTemplateFile( { pathResourceUSERCONTENT: pathResourceUSERCONTENT, htmlTagTitle: 'HOMEPAGE', htmlMetaTagDescription: 'Lorem Ipsum Dolot Amet' } );
	response.status( 200 ).send( processedHTML ).end();
} ).get( '/product-detail-page.html', async( request, response ) => {
	const websiteTemplateFilePath = fs.readFileSync( path.join( __dirname, './website-templates/product-detail-page.hbs' ), 'utf-8' );
	const compiledTemplateFile    = handlebars.compile( websiteTemplateFilePath );
	const pathResourceUSERCONTENT = request.protocol + ':/' + request.get( 'host' ) + '/resourceUSERCONTENT/';
	const processedHTML           = compiledTemplateFile( { pathResourceUSERCONTENT: pathResourceUSERCONTENT, htmlTagTitle: 'HOMEPAGE', htmlMetaTagDescription: 'Lorem Ipsum Dolot Amet' } );
	response.status( 200 ).send( processedHTML ).end();
} ).get( '/gallery-page.html', async( request, response ) => {
	const websiteTemplateFilePath = fs.readFileSync( path.join( __dirname, './website-templates/gallery-page.hbs' ), 'utf-8' );
	const compiledTemplateFile    = handlebars.compile( websiteTemplateFilePath );
	const pathResourceUSERCONTENT = request.protocol + ':/' + request.get( 'host' ) + '/resourceUSERCONTENT/';
	const processedHTML           = compiledTemplateFile( { pathResourceUSERCONTENT: pathResourceUSERCONTENT, htmlTagTitle: 'HOMEPAGE', htmlMetaTagDescription: 'Lorem Ipsum Dolot Amet' } );
	response.status( 200 ).send( processedHTML ).end();
} ).get( '/404.html', async( request, response ) => {
	const websiteTemplateFilePath = fs.readFileSync( path.join( __dirname, './website-templates/404.hbs' ), 'utf-8' );
	const compiledTemplateFile    = handlebars.compile( websiteTemplateFilePath );
	const pathResourceUSERCONTENT = request.protocol + ':/' + request.get( 'host' ) + '/resourceUSERCONTENT/';
	const processedHTML           = compiledTemplateFile( { pathResourceUSERCONTENT: pathResourceUSERCONTENT, htmlTagTitle: 'HOMEPAGE', htmlMetaTagDescription: 'Lorem Ipsum Dolot Amet' } );
	response.status( 200 ).send( processedHTML ).end();
} ).get( '/account-pages--signup.html', async( request, response ) => {
	const websiteTemplateFilePath = fs.readFileSync( path.join( __dirname, './website-templates/account-pages--signup.hbs' ), 'utf-8' );
	const compiledTemplateFile    = handlebars.compile( websiteTemplateFilePath );
	const pathResourceUSERCONTENT = request.protocol + ':/' + request.get( 'host' ) + '/resourceUSERCONTENT/';
	const processedHTML           = compiledTemplateFile( { pathResourceUSERCONTENT: pathResourceUSERCONTENT, htmlTagTitle: 'HOMEPAGE', htmlMetaTagDescription: 'Lorem Ipsum Dolot Amet' } );
	response.status( 200 ).send( processedHTML ).end();
} ).get( '/account-pages--login.html', async( request, response ) => {
	const websiteTemplateFilePath = fs.readFileSync( path.join( __dirname, './website-templates/account-pages--login.hbs' ), 'utf-8' );
	const compiledTemplateFile    = handlebars.compile( websiteTemplateFilePath );
	const pathResourceUSERCONTENT = request.protocol + ':/' + request.get( 'host' ) + '/resourceUSERCONTENT/';
	const processedHTML           = compiledTemplateFile( { pathResourceUSERCONTENT: pathResourceUSERCONTENT, htmlTagTitle: 'HOMEPAGE', htmlMetaTagDescription: 'Lorem Ipsum Dolot Amet' } );
	response.status( 200 ).send( processedHTML ).end();
} ).get( '/account-pages--forgot-password.html', async( request, response ) => {
	const websiteTemplateFilePath = fs.readFileSync( path.join( __dirname, './website-templates/account-pages--forgot-password.hbs' ), 'utf-8' );
	const compiledTemplateFile    = handlebars.compile( websiteTemplateFilePath );
	const pathResourceUSERCONTENT = request.protocol + ':/' + request.get( 'host' ) + '/resourceUSERCONTENT/';
	const processedHTML           = compiledTemplateFile( { pathResourceUSERCONTENT: pathResourceUSERCONTENT, htmlTagTitle: 'HOMEPAGE', htmlMetaTagDescription: 'Lorem Ipsum Dolot Amet' } );
	response.status( 200 ).send( processedHTML ).end();
} ).get( '/account-pages--verification.html', async( request, response ) => {
	const websiteTemplateFilePath = fs.readFileSync( path.join( __dirname, './website-templates/account-pages--verification.hbs' ), 'utf-8' );
	const compiledTemplateFile    = handlebars.compile( websiteTemplateFilePath );
	const pathResourceUSERCONTENT = request.protocol + ':/' + request.get( 'host' ) + '/resourceUSERCONTENT/';
	const processedHTML           = compiledTemplateFile( { pathResourceUSERCONTENT: pathResourceUSERCONTENT, htmlTagTitle: 'HOMEPAGE', htmlMetaTagDescription: 'Lorem Ipsum Dolot Amet' } );
	response.status( 200 ).send( processedHTML ).end();
} ).get( '/my-account-pages--order.html', async( request, response ) => {
	const websiteTemplateFilePath = fs.readFileSync( path.join( __dirname, './website-templates/my-account-pages--order.hbs' ), 'utf-8' );
	const compiledTemplateFile    = handlebars.compile( websiteTemplateFilePath );
	const pathResourceUSERCONTENT = request.protocol + ':/' + request.get( 'host' ) + '/resourceUSERCONTENT/';
	const processedHTML           = compiledTemplateFile( { pathResourceUSERCONTENT: pathResourceUSERCONTENT, htmlTagTitle: 'HOMEPAGE', htmlMetaTagDescription: 'Lorem Ipsum Dolot Amet' } );
	response.status( 200 ).send( processedHTML ).end();
} ).get( '/my-account-pages--dashboard.html', async( request, response ) => {
	const websiteTemplateFilePath = fs.readFileSync( path.join( __dirname, './website-templates/my-account-pages--dashboard.hbs' ), 'utf-8' );
	const compiledTemplateFile    = handlebars.compile( websiteTemplateFilePath );
	const pathResourceUSERCONTENT = request.protocol + ':/' + request.get( 'host' ) + '/resourceUSERCONTENT/';
	const processedHTML           = compiledTemplateFile( { pathResourceUSERCONTENT: pathResourceUSERCONTENT, htmlTagTitle: 'HOMEPAGE', htmlMetaTagDescription: 'Lorem Ipsum Dolot Amet' } );
	response.status( 200 ).send( processedHTML ).end();
} ).get( '/my-account-pages--subscription.html', async( request, response ) => {
	const websiteTemplateFilePath = fs.readFileSync( path.join( __dirname, './website-templates/my-account-pages--subscription.hbs' ), 'utf-8' );
	const compiledTemplateFile    = handlebars.compile( websiteTemplateFilePath );
	const pathResourceUSERCONTENT = request.protocol + ':/' + request.get( 'host' ) + '/resourceUSERCONTENT/';
	const processedHTML           = compiledTemplateFile( { pathResourceUSERCONTENT: pathResourceUSERCONTENT, htmlTagTitle: 'HOMEPAGE', htmlMetaTagDescription: 'Lorem Ipsum Dolot Amet' } );
	response.status( 200 ).send( processedHTML ).end();
} ).get( '/checkout-page.html', async( request, response ) => {
	const websiteTemplateFilePath = fs.readFileSync( path.join( __dirname, './website-templates/checkout-page.hbs' ), 'utf-8' );
	const compiledTemplateFile    = handlebars.compile( websiteTemplateFilePath );
	const pathResourceUSERCONTENT = request.protocol + ':/' + request.get( 'host' ) + '/resourceUSERCONTENT/';
	const processedHTML           = compiledTemplateFile( { pathResourceUSERCONTENT: pathResourceUSERCONTENT, htmlTagTitle: 'HOMEPAGE', htmlMetaTagDescription: 'Lorem Ipsum Dolot Amet' } );
	response.status( 200 ).send( processedHTML ).end();
} ).get( '/order-received.html', async( request, response ) => {
	const websiteTemplateFilePath = fs.readFileSync( path.join( __dirname, './website-templates/order-received.hbs' ), 'utf-8' );
	const compiledTemplateFile    = handlebars.compile( websiteTemplateFilePath );
	const pathResourceUSERCONTENT = request.protocol + ':/' + request.get( 'host' ) + '/resourceUSERCONTENT/';
	const processedHTML           = compiledTemplateFile( { pathResourceUSERCONTENT: pathResourceUSERCONTENT, htmlTagTitle: 'HOMEPAGE', htmlMetaTagDescription: 'Lorem Ipsum Dolot Amet' } );
	response.status( 200 ).send( processedHTML ).end();
} ).get( '/review-form-page.html', async( request, response ) => {
	const websiteTemplateFilePath = fs.readFileSync( path.join( __dirname, './website-templates/review-form-page.hbs' ), 'utf-8' );
	const compiledTemplateFile    = handlebars.compile( websiteTemplateFilePath );
	const pathResourceUSERCONTENT = request.protocol + ':/' + request.get( 'host' ) + '/resourceUSERCONTENT/';
	const processedHTML           = compiledTemplateFile( { pathResourceUSERCONTENT: pathResourceUSERCONTENT, htmlTagTitle: 'HOMEPAGE', htmlMetaTagDescription: 'Lorem Ipsum Dolot Amet' } );
	response.status( 200 ).send( processedHTML ).end();
} ).get( '/product-form.html', async( request, response ) => {
	const websiteTemplateFilePath = fs.readFileSync( path.join( __dirname, './website-templates/product-form.hbs' ), 'utf-8' );
	const compiledTemplateFile    = handlebars.compile( websiteTemplateFilePath );
	const pathResourceUSERCONTENT = request.protocol + ':/' + request.get( 'host' ) + '/resourceUSERCONTENT/';
	const processedHTML           = compiledTemplateFile( { pathResourceUSERCONTENT: pathResourceUSERCONTENT, htmlTagTitle: 'HOMEPAGE', htmlMetaTagDescription: 'Lorem Ipsum Dolot Amet' } );
	response.status( 200 ).send( processedHTML ).end();
} ).get( '/icon-font-page.html', async( request, response ) => {
	const websiteTemplateFilePath = fs.readFileSync( path.join( __dirname, './website-templates/icon-font-page.hbs' ), 'utf-8' );
	const compiledTemplateFile    = handlebars.compile( websiteTemplateFilePath );
	const pathResourceUSERCONTENT = request.protocol + ':/' + request.get( 'host' ) + '/resourceUSERCONTENT/';
	const processedHTML           = compiledTemplateFile( { pathResourceUSERCONTENT: pathResourceUSERCONTENT, htmlTagTitle: 'HOMEPAGE', htmlMetaTagDescription: 'Lorem Ipsum Dolot Amet' } );
	response.status( 200 ).send( processedHTML ).end();
} ).get( '/navigation--html-signup.html', async( request, response ) => {
	const websiteTemplateFilePath = fs.readFileSync( path.join( __dirname, './website-templates/navigation--html-signup.hbs' ), 'utf-8' );
	const compiledTemplateFile    = handlebars.compile( websiteTemplateFilePath );
	const pathResourceUSERCONTENT = request.protocol + ':/' + request.get( 'host' ) + '/resourceUSERCONTENT/';
	const processedHTML           = compiledTemplateFile( { pathResourceUSERCONTENT: pathResourceUSERCONTENT, htmlTagTitle: 'HOMEPAGE', htmlMetaTagDescription: 'Lorem Ipsum Dolot Amet' } );
	response.status( 200 ).send( processedHTML ).end();
} ).get( '/single.html', async( request, response ) => {
	const websiteTemplateFilePath = fs.readFileSync( path.join( __dirname, './website-templates/single.hbs' ), 'utf-8' );
	const compiledTemplateFile    = handlebars.compile( websiteTemplateFilePath );
	const pathResourceUSERCONTENT = request.protocol + ':/' + request.get( 'host' ) + '/resourceUSERCONTENT/';
	const processedHTML           = compiledTemplateFile( { pathResourceUSERCONTENT: pathResourceUSERCONTENT, htmlTagTitle: 'HOMEPAGE', htmlMetaTagDescription: 'Lorem Ipsum Dolot Amet' } );
	response.status( 200 ).send( processedHTML ).end();
} ).get( '/blog-listings--left-sidebar.html', async( request, response ) => {
	const websiteTemplateFilePath = fs.readFileSync( path.join( __dirname, './website-templates/blog-listings--left-sidebar.hbs' ), 'utf-8' );
	const compiledTemplateFile    = handlebars.compile( websiteTemplateFilePath );
	const pathResourceUSERCONTENT = request.protocol + ':/' + request.get( 'host' ) + '/resourceUSERCONTENT/';
	const processedHTML           = compiledTemplateFile( { pathResourceUSERCONTENT: pathResourceUSERCONTENT, htmlTagTitle: 'HOMEPAGE', htmlMetaTagDescription: 'Lorem Ipsum Dolot Amet' } );
	response.status( 200 ).send( processedHTML ).end();
} ).get( '/blog-listings--no-sidebar.html', async( request, response ) => {
	const websiteTemplateFilePath = fs.readFileSync( path.join( __dirname, './website-templates/blog-listings--no-sidebar.hbs' ), 'utf-8' );
	const compiledTemplateFile    = handlebars.compile( websiteTemplateFilePath );
	const pathResourceUSERCONTENT = request.protocol + ':/' + request.get( 'host' ) + '/resourceUSERCONTENT/';
	const processedHTML           = compiledTemplateFile( { pathResourceUSERCONTENT: pathResourceUSERCONTENT, htmlTagTitle: 'HOMEPAGE', htmlMetaTagDescription: 'Lorem Ipsum Dolot Amet' } );
	response.status( 200 ).send( processedHTML ).end();
} ).get( '/blog-listings--right-sidebar.html', async( request, response ) => {
	const websiteTemplateFilePath = fs.readFileSync( path.join( __dirname, './website-templates/blog-listings--right-sidebar.hbs' ), 'utf-8' );
	const compiledTemplateFile    = handlebars.compile( websiteTemplateFilePath );
	const pathResourceUSERCONTENT = request.protocol + ':/' + request.get( 'host' ) + '/resourceUSERCONTENT/';
	const processedHTML           = compiledTemplateFile( { pathResourceUSERCONTENT: pathResourceUSERCONTENT, htmlTagTitle: 'HOMEPAGE', htmlMetaTagDescription: 'Lorem Ipsum Dolot Amet' } );
	response.status( 200 ).send( processedHTML ).end();
} ).get( '/blog-listings--no-results.html', async( request, response ) => {
	const websiteTemplateFilePath = fs.readFileSync( path.join( __dirname, './website-templates/blog-listings--no-results.hbs' ), 'utf-8' );
	const compiledTemplateFile    = handlebars.compile( websiteTemplateFilePath );
	const pathResourceUSERCONTENT = request.protocol + ':/' + request.get( 'host' ) + '/resourceUSERCONTENT/';
	const processedHTML           = compiledTemplateFile( { pathResourceUSERCONTENT: pathResourceUSERCONTENT, htmlTagTitle: 'HOMEPAGE', htmlMetaTagDescription: 'Lorem Ipsum Dolot Amet' } );
	response.status( 200 ).send( processedHTML ).end();
} );
export default router;