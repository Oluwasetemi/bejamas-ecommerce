module.exports = {
	collectCoverageFrom: [
		'**/*.{jsx,ts,tsx}',
		'!**/node_modules/**',
		'!**/vendor/**',
		'.next/',
		'cypress',
		'*.d.ts',
		'config.ts',
	],
	coveragePathIgnorePatterns: ['<rootDir>/node_modules', 'cypress'],
	coverageReporters: ['json', 'text', 'lcov', 'clover'],
	// coverageThreshold: {
	// 	global: {
	// 		branches: 90,
	// 		functions: 80,
	// 		lines: 90,
	// 		statements: 90,
	// 	},
	// },
	moduleNameMapper: {
		'\\.(css|less)$': 'identity-obj-proxy',
		'^.+\\.(jpg|jpeg|png|gif|webp|svg)$': `<rootDir>/__mocks__/fileMock.js`,
		// Handle module aliases
		// '^@/components/(.*)$': '<rootDir>/components/$1',
	},
	snapshotSerializers: ['@emotion/jest/serializer'],
	setupFilesAfterEnv: ['<rootDir>/test/setup-env.ts'],
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
	transform: {
		// '^.+\\.svg$': '<rootDir>/svg-transform.js',
		'^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
	},
	transformIgnorePatterns: [
		'/node_modules/',
		'^.+\\.module\\.(css|sass|scss)$',
	],
	watchPlugins: [
		'jest-watch-typeahead/filename',
		'jest-watch-typeahead/testname',
	],
};
