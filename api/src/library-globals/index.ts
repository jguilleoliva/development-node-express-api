const configureLocals = ( ( request: any, response: any, next: any ) => {
	response.locals = {
		'systemErrorMessages': {
			'100': 'SYSTEM-MESSAGE::OK',
			//--- ECOMMERCE-CUSTOMER-MESSAGES
			'801': 'ERROR-CUSTOMER::CUSTOMER-NOT-FOUND',
			//--- SYSTEM-MESSAGES
			'901': 'SYSTEM-MESSAGE::MISSING-PARAMETERS',
			'902': 'SYSTEM-MESSAGE::MISSING-HEADERS',
			'999': 'SYSTEM-MESSAGE::FAILED',
		},
	};
	next();
} );
export default configureLocals;
