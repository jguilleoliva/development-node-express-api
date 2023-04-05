/*--- IMPORTS ---*/
import express     from 'express';
/*--- MODULES ---*/
import { mailgun } from '../settings-configuration';
import nodemailer  from 'nodemailer';
import mg          from 'nodemailer-mailgun-transport';
import handlebars  from 'handlebars';
import fs          from 'fs';
import path        from 'path';
/*--- ROUTER ---*/
const router = express.Router();
/*--- ROUTER ---*/
router.get( '/email/email-test', async function( request, response, next ) {
	const currentDate                  = new Date().toDateString();
	const currentTime                  = new Date().toTimeString();
	const frameworkResourceUsercontent = request.protocol + ':/' + request.get( 'host' ) + '/resourceUSERCONTENT/';
	const emailTemplateSource          = fs.readFileSync( path.join( __dirname, './templates-email/email-tester.hbs' ), 'utf8' );
	const template                     = handlebars.compile( emailTemplateSource );
	const htmlToSend                   = template( { frameworkResourceUsercontent: frameworkResourceUsercontent } );
	const dataObject                   = {
		user:       {
			name: 'Juan Oliva', email: 'jguilleoliva@asteg.co',
		}, subject: `${ currentDate } ${ currentTime } - FRAMEWORK - mailer test `, htmlMessage: htmlToSend,
	};
	await supportEmailMailsender( dataObject ).then( ( result ) => {
		return response.status(200).send( {
			'result-success': result, 'result-message': result ? 'FRAMEWORK::SUCCESS::EMAIL-SENT' : 'FRAMEWORK::FAILED::EMAIL-NOT-SENT', 'result-message-size': `${ htmlToSend.length } bytes`,
		} );
	} );
} );
let supportEmailMailsender = async( data: any ) => {
	const auth = {
		auth: {
			api_key: mailgun.api_key || '', domain: mailgun.domain || '', url: mailgun.url || '',
		},
	};
	if( data.user.name === undefined ) { data.user.name = data.user.email; }
	const transporter = nodemailer.createTransport( mg( auth ) );
	const mailOptions = {
		from: `${ mailgun.mail_name } <${ mailgun.mail_email }>`, to: `${ data.user.name } <${ data.user.email }>`, subject: data.subject, html: data.htmlMessage,
	};
	return await transporter.sendMail( mailOptions ).catch( ( errorMessage ) => {
		return errorMessage;
	} ).then( ( errorMessage ) => {
		return errorMessage.id !== undefined;
	} );
};
//--- EXPORT-ROUTER
export default router;