/*--- IMPORTS ---*/
import express           from 'express';
/*--- MODULES ---*/
import { databaseQuery } from '../library-database';
/*--- VARIABLES ---*/
const router = express.Router();
/*--- ROUTER ---*/
router.get( '/framework-test', async( request, response ) => {
	response.send( await commonScriptDebug() );
} );
let commonScriptDebug = async() => {
	return await databaseQuery( 'SELECT * FROM CORE_RESOURCES WHERE RESOURCE_GROUP_INDEX =?', [ 1000 ] )
	.then( ( resultQueryObject ) => {
		return {
			'request-result':          true,
			'result-message':          'ASTEG-FRAMEWORK::SYSTEM::CHECK-OK',
			'asteg-framework-details': {
				'framework-version': resultQueryObject[ 'data-rows' ][ 0 ].RESOURCE_CONTENT,
				'framework-name':    resultQueryObject[ 'data-rows' ][ 1 ].RESOURCE_CONTENT,
			},
		};
	} );
};
export default router;