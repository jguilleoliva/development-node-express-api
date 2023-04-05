/*--- IMPORTS ---*/
import dotenv from 'dotenv';
/*--- STARTUP-SCRIPTS ---*/
dotenv.config();
/*--- VARIABLES ---*/
const env = process.env;
/*--- EXPORTS ---*/
export const stage   = env.STAGE;
export const port    = env.PORT;
export const version = env.VERSION;
export const db      = {
	host:              env.DB_HOST,
	user:              env.DB_USER,
	password:          env.DB_PASSWORD,
	database:          env.DB_NAME,
	port:              parseInt( env.DB_PORT || '', 10 ),
	namedPlaceholders: true,
};
export const mailgun = {
	api_key:    env.MAILGUN_APIKEY,
	domain:     env.MAILGUN_DOMAIN,
	url:        env.MAILGUN_URL,
	mail_name:  env.MAILGUN_FROM_NAME,
	mail_email: env.MAILGUN_FROM_ADDRESS,
};
export const secret  = {
	key: ( env.TOKEN_SECRET || '' ),
};
