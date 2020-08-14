import {SafeAreaView, Alert, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';

const App = () => {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remotemMessage => {
      Alert.alert('FCM message running', JSON.stringify(remotemMessage));
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView></SafeAreaView>
    </>
  );
};

export default App;
