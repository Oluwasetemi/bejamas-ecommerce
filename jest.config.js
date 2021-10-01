module.exports = {
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['<rootDir>/node_modules', 'cypress'],
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 80,
      lines: 90,
      statements: 90,
    },
  },
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
    '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': `<rootDir>/__mocks__/fileMock.js`,
    // Handle module aliases
    // '^@/components/(.*)$': '<rootDir>/components/$1',
  },
  transform: {
    // '^.+\\.svg$': '<rootDir>/svg-transform.js',
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  snapshotSerializers: ['@emotion/jest/serializer'],
  setupFilesAfterEnv: ['<rootDir>/test/setup-env.ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
};
