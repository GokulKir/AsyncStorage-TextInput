/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import React from 'react';
import { Provider } from 'react-redux';
import {name as appName} from './app.json';
import configureStore from './src/Store/configureStore';
import Count from './Count';

const store = configureStore();

const RNRedux = () => (
    <Provider store={store}>
    <Count/>
    </Provider>
)

AppRegistry.registerComponent(appName, () => App);
