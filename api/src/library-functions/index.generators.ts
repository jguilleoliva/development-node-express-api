export const generateUUID = () => {
	let timestamp = new Date().getTime();
	timestamp     = ( timestamp > 0 )
					? timestamp
					: ( ( typeof performance !== 'undefined' ) && performance.now && ( performance.now() * 1000 ) ) || 0; //--- IF Date().getTime() not supported, switch to microseconds
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace( /[xy]/g, function( c ) {
		let r     = ( timestamp + ( Math.random() * 16 ) ) % 16 | 0;
		timestamp = Math.floor( timestamp / 16 );
		return ( c === 'x' ? r : ( r & 0x3 | 0x8 ) ).toString( 16 );
	} );
};
