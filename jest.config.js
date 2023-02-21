const jestPreset = require('@testing-library/react-native/jest-preset');

module.exports = {
  preset: 'react-native',
  setupFiles: [...jestPreset.setupFiles],
  setupFilesAfterEnv: ['./jest.setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',
  ],
};
