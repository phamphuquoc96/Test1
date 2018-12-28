/** @format */

import {AppRegistry, View} from 'react-native';
// import App from './App';
import React from 'react';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import MainLogin from './mainlogin';
import store from './src/redux/store';

const AppComponent = () => (
    <Provider store={store}>
        <MainLogin/>
    </Provider>
)

AppRegistry.registerComponent(appName, () => AppComponent);
