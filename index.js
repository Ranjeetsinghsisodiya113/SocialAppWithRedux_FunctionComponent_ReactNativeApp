/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import store  from './src/redux/stores';
import { Provider } from 'react-redux';
import React from 'react';
const AppRedux =()=>{
    return(
<Provider store={store}>
<App />
</Provider>
)
}

AppRegistry.registerComponent(appName, () => AppRedux);