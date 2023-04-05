/*--- IMPORTS ---*/
import express                                                         from 'express';
/*--- MODULES ---*/
import { databaseDelete, databasePost, databaseQuery, databaseUpdate } from '../library-database';
import { jwtMiddlewareVerifyToken }                                    from '../library-security';
/*--- VARIABLES ---*/
/*--- ROUTER ---*/
const router = express.Router();
//--- LABEL-ROUTES
router.get( '/core/user/:userIndex', async( request, response ) => {
	response.send( await databaseQuery(
		'SELECT * FROM CORE_USERS WHERE ID =?',
		[ request.params.userIndex ] ).then( ( resultQueryObject ) => {
		return resultQueryObject;
	} ) );
} );
router.post( '/content/label', jwtMiddlewareVerifyToken, async( request, response ) => {
	response.send( await databasePost( 'CONTENT_LABELS', request.body ).then( ( resultQueryObject ) => {
		return resultQueryObject;
	} ) );
} );
router.put( '/content/label', jwtMiddlewareVerifyToken, async( request, response ) => {
	const updateIndex = request.body.INDEX || -1;
	response.send( await databaseUpdate( 'CONTENT_LABELS', request.body, `ID = ${ updateIndex }` ).then( ( resultQueryObject ) => {
		return resultQueryObject;
	} ) );
} );
router.delete( '/content/label', jwtMiddlewareVerifyToken, async( request, response ) => {
	const deleteIndex = request.body.INDEX || -1;
	const deleteField = request.body.FIELD || '';
	response.send( await databaseDelete( 'CONTENT_LABELS', { [ deleteField ]: deleteIndex } ).then( ( resultQueryObject ) => {
		return resultQueryObject;
	} ) );
} );
export default router;