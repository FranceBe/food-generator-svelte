const baseDir = __dirname

module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    'src/**/*.{svelte}',
    'src/**/*.{js}',
    '!src/**/*.test.{js}',
    '!src/server/*.{js}',
  ],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  coverageDirectory: `${baseDir}/coverage`,
  coverageReporters: ['text', 'html'],
  moduleDirectories: [
    'node_modules',
    'src',
  ],
  rootDir: `${baseDir}`,
  roots: [`${baseDir}/src`],
  transform: {
    "^.+\\.svelte$": "jest-transform-svelte",
    "^.+\\.js$": "babel-jest"
  },
  moduleFileExtensions: ["js", "svelte"],
  testPathIgnorePatterns: ["node_modules"],
  bail: false,
  verbose: true,
  transformIgnorePatterns: ["node_modules"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  testRegex: '__tests__/.*\\.test\\.js$',
};
