/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import './src/data/miragejs';
import {makeServer} from './src/data/miragejs';
makeServer();

AppRegistry.registerComponent(appName, () => App);
