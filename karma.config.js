module.exports = function(config) {
	
	config.set({

		frameworks: ['jasmine', 'karma-typescript'],

		files: [
			{pattern: 'src/**/*.ts'},
			{pattern: 'test/testing.utils.ts'},
			{pattern: 'test/**/*.spec.ts'}
		],

		preprocessors: {
			'**/*.ts': ['karma-typescript']
		},

		karmaTypescriptConfig: {
			bundlerOptions: {
				addNodeGlobals: false,
				entrypoints: /\.spec\.ts$/
			},

			compilerOptions: {
				emitDecoratorMetadata: true,
                experimentalDecorators: true,
                module: "commonjs",
                moduleResolution: "node",
                sourceMap: true,
                target: "ES5",
                lib: ["DOM", "ES2015"]
			},

			include: ['**/*.ts'],
			exclude: ['**/*/testing.utils.ts'],

			reports: {
				'html': 'coverage',
				'text-summary': ''
			}
		},

		reporters: ['mocha', 'karma-typescript'],

		browsers: ['Chrome']

	});

}