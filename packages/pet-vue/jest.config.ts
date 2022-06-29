/* eslint-disable */
export default {
  displayName: 'pet-vue',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html', 'json'],
  coverageDirectory: '../../coverage/packages/pet-vue',
  coverageReporters: ['html', 'lcov'],
  testEnvironment: 'node',
};
