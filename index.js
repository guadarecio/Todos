/**
 * @format
 */

const originalConsoleError = console.error;

console.error = (...args) => {
  if (args[0].includes('ViewPropTypes will be removed from React Native')) {
    return;
  }

  originalConsoleError.apply(console, args);
};

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
