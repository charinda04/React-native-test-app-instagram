/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
// import AppComponent from '@flashmobile:app/App.component';
import AppComponent from './app/App.component';
// import AppComponent from './app/modules/home/screens/newsFeed/NewsFeed.screen';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppComponent);
