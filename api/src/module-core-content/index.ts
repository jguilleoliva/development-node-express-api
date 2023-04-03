/*--- IMPORTS ---*/
import express                                                         from 'express';
/*--- MODULES ---*/
import { databaseDelete, databasePost, databaseQuery, databaseUpdate } from '../library-database';
import { jwtMiddlewareVerifyToken }                                    from '../library-security';
/*--- VARIABLES ---*/
const router = express.Router();
/*--- ROUTER ---*/
//--- LABEL-ROUTES
router.get( '/content/labels/:contentGroupIndex', async( request, response ) => {
	response.send( await databaseQuery(
		'SELECT * FROM CONTENT_LABELS WHERE CONTENT_GROUP_INDEX =? ORDER BY CONTENT_GROUP_INDEX, CONTENT_TITLE',
		[ request.params.contentGroupIndex ] ).then( ( resultQueryObject ) => {
		return resultQueryObject;
	} ) );
} );
router.get( '/content/label/:index', async( request, response ) => {
	response.send( await databaseQuery(
		'SELECT * FROM CONTENT_LABELS WHERE ID =?',
		[ request.params.index ] ).then( ( resultQueryObject ) => {
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
//--- IMAGE-ROUTES
router.get( '/content/images/:contentGroupIndex', async( request, response ) => {
	response.send( await databaseQuery(
		'SELECT * FROM CONTENT_IMAGES WHERE IMAGES_GROUP_INDEX =?',
		[ request.params.contentGroupIndex ] ).then( ( resultQueryObject ) => {
		return resultQueryObject;
	} ) );
} );
router.get( '/content/image/:index', async( request, response ) => {
	response.send( await databaseQuery(
		'SELECT * FROM CONTENT_IMAGES WHERE ID =?',
		[ request.params.index ] ).then( ( resultQueryObject ) => {
		return resultQueryObject;
	} ) );
} );
router.post( '/content/image', jwtMiddlewareVerifyToken, async( request, response ) => {
	response.send( await databasePost( 'CONTENT_IMAGES', request.body ).then( ( resultQueryObject ) => {
		return resultQueryObject;
	} ) );
} );
router.put( '/content/image', jwtMiddlewareVerifyToken, async( request, response ) => {
	const updateIndex = request.body.INDEX || -1;
	response.send( await databaseUpdate( 'CONTENT_IMAGES', request.body, `ID = ${ updateIndex }` ).then( ( resultQueryObject ) => {
		return resultQueryObject;
	} ) );
} );
router.delete( '/content/image', jwtMiddlewareVerifyToken, async( request, response ) => {
	const deleteIndex = request.body.INDEX || -1;
	const deleteField = request.body.FIELD || '';
	response.send( await databaseDelete( 'CONTENT_IMAGES', { [ deleteField ]: deleteIndex } ).then( ( resultQueryObject ) => {
		return resultQueryObject;
	} ) );
} );
//--- ARTICLE-ROUTES
router.get( '/content/article/:index', async( request, response ) => {
	response.send( await databaseQuery(
		'SELECT * FROM CONTENT_ARTICLES WHERE ID =?',
		[ request.params.index ] ).then( ( resultQueryObject ) => {
		return resultQueryObject;
	} ) );
} );
router.post( '/content/article', jwtMiddlewareVerifyToken, async( request, response ) => {
	response.send( await databasePost( 'CONTENT_ARTICLES', request.body ).then( ( resultQueryObject ) => {
		return resultQueryObject;
	} ) );
} );
router.put( '/content/article', jwtMiddlewareVerifyToken, async( request, response ) => {
	const updateIndex = request.body.INDEX || -1;
	response.send( await databaseUpdate( 'CONTENT_ARTICLES', request.body, `ID = ${ updateIndex }` ).then( ( resultQueryObject ) => {
		return resultQueryObject;
	} ) );
} );
router.delete( '/content/article', jwtMiddlewareVerifyToken, async( request, response ) => {
	const deleteIndex = request.body.INDEX || -1;
	const deleteField = request.body.FIELD || '';
	response.send( await databaseDelete( 'CONTENT_ARTICLES', { [ deleteField ]: deleteIndex } ).then( ( resultQueryObject ) => {
		return resultQueryObject;
	} ) );
} );
export default router;