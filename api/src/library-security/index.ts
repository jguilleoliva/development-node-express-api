/*--- FRAMEWORK ---*/
import { sign, verify } from 'jsonwebtoken';
import { secret }       from '../settings-configuration';
/*--- MODULES ---*/
/*--- VARIABLES ---*/
export const jwtSignToken             = async( requestData: any ) => {
	return sign( {
		/*--- MISSING-CHECK-CREDENTIALS ---*/
		'result-token': requestData,
		'result-role':  'SYSTEM::VISITOR',
	}, secret.key );
};
export const jwtMiddlewareVerifyToken = ( request: any, response: any, next: any ) => {
	if( request.headers && request.headers.authorization && request.headers.authorization.split( ' ' )[ 0 ] === 'Bearer' ) {
		verify( request.headers.authorization.split( ' ' )[ 1 ], secret.key, ( error: any, decodedData: any ) => {
			if( error ) {
				request.tokenVerification = false;
				response.status( 500 ).send( {
					'result-success': false,
					'error-label':    response.locals.systemErrorMessages[ 990 ] + error.name,
					'error-message':  error.message,
				} );
			} else {
				/*--- MISSING-CHECK-CREDENTIALS ---*/
				request.tokenVerification = true;
				request.tokenData         = decodedData[ 'result-token' ];
				request.tokenRole         = decodedData[ 'result-role' ];
				next();
			}
		} );
	} else {
		response.status( 500 ).send( {
			'result-success': false,
			'error-label':    response.locals.systemErrorMessages[ 902 ],
		} );
	}
};
