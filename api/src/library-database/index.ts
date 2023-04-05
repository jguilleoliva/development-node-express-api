/*--- IMPORT ---*/
import { db } from '../settings-configuration';
import mysql  from 'mysql2/promise';
/*--- QUERY-FUNCTIONS ---*/
export const databaseQuery  = async( objectQuerySQL: string, objectQueryParameters: any = [] ) => {
	const connection = await mysql.createConnection( db );
	try {
		return await connection.execute( objectQuerySQL, objectQueryParameters ).then( ( resultObject ) => {
			return parseQuerySQL( resultObject );
		} );
	} catch( error ) {
		console.log( error );
	}
};
export const databasePost   = async( postTablename: string, objectPostParameters: any ) => {
	const arrayTableFields: any        = [];
	const objectRequestParameters: any = {};
	const connection                   = await mysql.createConnection( db );
	//--- GET-TABLE-DESCRIPTION
	const [ queryRows, _ ]             = await connection.query( `DESCRIBE ${ postTablename }` );
	Object.entries( queryRows ).forEach( ( fieldObject: any ) => {
		arrayTableFields.push( fieldObject[ 1 ].Field );
	} );
	//--- CREATE-REQUEST-ONLY-WITH-THE-TABLE-FIELDS
	Object.entries( objectPostParameters ).forEach( ( postParameter ) => {
		if( arrayTableFields.includes( postParameter[ 0 ] ) ) {
			objectRequestParameters[ postParameter[ 0 ] ] = postParameter[ 1 ];
		}
	} );
	//--- TRY-CATCH-REQUEST
	try {
		return await connection.query( `INSERT INTO ${postTablename} SET ? `, [ objectRequestParameters ] ).then( ( resultObject ) => {
			return parsePostSQL( objectRequestParameters, arrayTableFields, resultObject, postTablename );
		} );
	} catch( error ) {
		console.log( error );
	}
};
export const databaseUpdate = async( updateTablename: string, objectPostParameters: any, updateQueryWhere: string = '' ) => {
	const arrayTableFields: any        = [];
	const objectRequestParameters: any = {};
	const connection                   = await mysql.createConnection( db );
	//--- GET-TABLE-DESCRIPTION
	const [ queryRows, _ ]             = await connection.query( `DESCRIBE ${ updateTablename }` );
	Object.entries( queryRows ).forEach( ( fieldObject: any ) => {
		arrayTableFields.push( fieldObject[ 1 ].Field );
	} );
	//--- CREATE-REQUEST-ONLY-WITH-THE-TABLE-FIELDS
	Object.entries( objectPostParameters ).forEach( ( postParameter ) => {
		if( arrayTableFields.includes( postParameter[ 0 ] ) ) {
			objectRequestParameters[ postParameter[ 0 ] ] = postParameter[ 1 ];
		}
	} );
	//--- TRY-CATCH-REQUEST
	try {
		return await connection.query( `UPDATE ${updateTablename} SET ? WHERE ${updateQueryWhere}`, [ objectRequestParameters ] ).then( ( resultObject ) => {
			return parseUpdateSQL( objectRequestParameters, arrayTableFields, resultObject, updateTablename );
		} );
	} catch( error ) {
		console.log( error );
	}
};
export const databaseDelete = async( deleteTablename: string, objectPostParameters: any ) => {
	const connection = await mysql.createConnection( db );
	//--- TRY-CATCH-REQUEST
	try {
		return await connection.query( `DELETE FROM ${deleteTablename} WHERE ?`, [ objectPostParameters ] ).then( ( resultObject ) => {
			return parseDeleteSQL( resultObject, objectPostParameters, deleteTablename );
		} );
	} catch( error ) {
		console.log( error );
	}
};
/*--- RESULT-PARSERS ---*/
const parseQuerySQL  = ( [ resultQueryObject, resultFieldObject ]: any[] ): any => {
	const arrayTableFields: any = [];
	Object.entries( resultFieldObject ).forEach( ( fieldObject: any ) => {
		arrayTableFields.push( fieldObject[ 1 ].name );
	} );
	const resultObject = {
		'request-result': true,
		'data-fields':    arrayTableFields,
		'data-rows':      resultQueryObject,
		'data-specs':     {
			'query-row-count':   resultQueryObject.length,
			'query-field-count': arrayTableFields.length,
			'query-byte-size':   new Intl.NumberFormat( 'en-US', {
				style:       'unit',
				unit:        'byte',
				unitDisplay: 'long',
				useGrouping: true,
			} ).format( JSON.stringify( resultQueryObject ).length ),
		},
	};
	return resultObject;
};
const parsePostSQL   = ( objectRequestParameters: any, arrayTableFields: Array<string>, resultInsertObject: any, postTablename: string ): any => {
	const resultObject = {
		'request-result':     true,
		'insert-data-table':  postTablename,
		'insert-data-fields': arrayTableFields,
		'insert-data-rows':   objectRequestParameters,
		'insert-data-specs':  {
			'insert-table-field-count': arrayTableFields.length,
			'insert-index':             resultInsertObject[ 0 ].insertId,
			'insert-rows-inserted':     resultInsertObject[ 0 ].affectedRows,
			'insert-fields-inserted':   Object.keys( objectRequestParameters ).length,
			'insert-byte-size':         new Intl.NumberFormat( 'en-US', {
				style:       'unit',
				unit:        'byte',
				unitDisplay: 'long',
				useGrouping: true,
			} ).format( JSON.stringify( objectRequestParameters ).length ),
		},
	};
	return resultObject;
};
const parseUpdateSQL = ( objectRequestParameters: any, arrayTableFields: Array<string>, resultInsertObject: any, updateTablename: string ): any => {
	const resultObject = {
		'request-result':     true,
		'update-data-table':  updateTablename,
		'update-data-fields': arrayTableFields,
		'update-data-rows':   objectRequestParameters,
		'update-data-specs':  {
			'update-table-field-count': arrayTableFields.length,
			'update-information':       resultInsertObject[ 0 ].info,
			'update-rows-updated':      resultInsertObject[ 0 ].affectedRows,
			'update-fields-updated':    Object.keys( objectRequestParameters ).length,
			'update-byte-size':         new Intl.NumberFormat( 'en-US', {
				style:       'unit',
				unit:        'byte',
				unitDisplay: 'long',
				useGrouping: true,
			} ).format( JSON.stringify( objectRequestParameters ).length ),
		},
	};
	return resultObject;
};
const parseDeleteSQL = ( resultDeleteObject: any, objectRequestParameters: any, deleteTablename: string ): any => {
	const resultObject = {
		'request-result':    true,
		'delete-data-table': deleteTablename,
		'delete-data-rows':  objectRequestParameters,
		'delete-data-specs': {
			'delete-rows-deleted': resultDeleteObject[ 0 ].affectedRows,
			'delete-byte-size':    new Intl.NumberFormat( 'en-US', {
				style:       'unit',
				unit:        'byte',
				unitDisplay: 'long',
				useGrouping: true,
			} ).format( JSON.stringify( objectRequestParameters ).length ),
		},
	};
	return resultObject;
};
