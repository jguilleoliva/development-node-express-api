/*--- IMPORTS ---*/
import express                      from 'express';
/*--- MODULES ---*/
import { jwtMiddlewareVerifyToken } from '../library-security';
/*--- VARIABLES ---*/
const router = express.Router();
/*--- ROUTER ---*/
//--- COMMON-LOGIN
router.get( '/common/logout', async( request, response ) => {
	response.send( 'LOGOUT' );
} );
router.post( '/common/login', jwtMiddlewareVerifyToken, async( request, response ) => {
	response.send( 'LOGIN' );
} );
export default router;