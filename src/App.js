import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import firebase from 'firebase';

import { Button, Card, CardSection, Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

const styles = {
  appStyle: {
    flexDirection: 'column',
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null,
    };
  }
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

    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ loggedIn: user });
    });
  }

  renderContent() {
    if (this.state.loggedIn === null) {
      return (
        <Card>
          <CardSection>
            <Spinner size="large" />
          </CardSection>
        </Card>
      );
    } else if (this.state.loggedIn) {
      return (
        <Card>
          <CardSection>
            <Button>Log out</Button>
          </CardSection>
        </Card>
      );
    }
    return <LoginForm />;
  }

  render() {
    return (
      <View style={styles.appStyle}>
        <Header title="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
