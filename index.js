/**
 * @format
 */

import {AppRegistry} from 'react-native';
import messaging from '@react-native-firebase/messaging';

import {name as appName} from './app.json';
import App from './App';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handle running handle on background', remoteMessage);
});
AppRegistry.registerComponent(appName, () => App);
