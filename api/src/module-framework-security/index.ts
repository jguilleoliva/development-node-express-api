/*--- IMPORTS ---*/
import express                                    from 'express';
/*--- MODULES ---*/
import configureLocals                            from '../library-globals/index';
import { jwtMiddlewareVerifyToken, jwtSignToken } from '../library-security';
/*--- VARIABLES ---*/
const router = express.Router();
/*--- ROUTER ---*/
router.post( '/token/get', async function( req, res ) {
	return res.send( await commonScriptGetToken( req.body ) );
} );
router.post( '/token/verify', configureLocals, jwtMiddlewareVerifyToken, async function( req, res ) {
	return res.send( {
		'request-result':  true,
		'request-message': 'ASTEG-FRAMEWORK::SYSTEM::CHECK-OK',
	} );
} );
/*--- INTERNAL FUNCTIONS ---*/
let commonScriptGetToken = async( objectRequest: any ) => {
	return await jwtSignToken( objectRequest.REQUEST_TOKEN ).then( ( resultToken ) => {
		return {
			'result-success': true,
			'result-token':   resultToken,
		};
	} );
};
//--- EXPORT-ROUTER
export default router;
