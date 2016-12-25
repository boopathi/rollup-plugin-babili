'use strict';

const babel = require( 'babel-core' );

export default function babili( options = {} ) {
	return {
		name: 'babili',

		transformBundle( code ) {
			const result = babel.transform( code, {
				presets: [ 'babili' ],
				sourceMaps: typeof options.sourceMap !== 'undefined' ? Boolean( options.sourceMap ) : true,
				comments: typeof options.comments !== 'undefined' ? Boolean( options.comments ) : true
			} );

			if ( options.banner ) {
				result.code = `${ options.banner }\n${ result.code.trim() }`;
			}

			return result;
		}
	};
}
