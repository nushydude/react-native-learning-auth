import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    firebase.initializeApp({
      apiKey: 'AIzaSyDQQAqNOaX4ujU7nrge_kR1c2bLxbdrYIs',
      authDomain: 'authentication-3fac4.firebaseapp.com',
      databaseURL: 'https://authentication-3fac4.firebaseio.com',
      projectId: 'authentication-3fac4',
      storageBucket: 'authentication-3fac4.appspot.com',
      messagingSenderId: '993183878735',
    });
  }

  render() {
    return (
      <View>
        <Header title="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
