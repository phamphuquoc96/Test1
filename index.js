/** @format */

import {AppRegistry} from 'react-native';
// import App from './App';

import {name as appName} from './app.json';
// import Login from './src/components/Login';
import MainActivity from './src/components/main/MainActivity';

AppRegistry.registerComponent(appName, () => MainActivity);
