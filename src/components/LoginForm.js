import React, { Component } from 'react';
import {
  Text,
} from 'react-native';
import firebase from 'firebase';

import { Button, Card, CardSection, Input, Spinner } from './common';

const styles = {
  errorTextStyle: {
    alignSelf: 'center',
    color: 'red',
    fontSize: 20,
  },
};

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      busy: false,
      email: '',
      errorMessage: '',
      password: '',
    };
    this.handleLoginButtonPress = this.handleLoginButtonPress.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.handleLoginSuccess = this.handleLoginSuccess.bind(this);
  }

  handleLoginButtonPress() {
    this.setState({ busy: true });
    const { email, password } = this.state;
    // try to login
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => this.handleLoginSuccess())
    .catch(() => {
      // try to create a new account assuming that there was no account
      // with the email provided
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => this.handleLoginSuccess())
      .catch(() => this.handleLoginFailure());
    });
  }

  handleLoginFailure() {
    this.setState({
      errorMessage: 'Authentication failed',
      busy: false,
    });
  }

  handleLoginSuccess() {
    this.setState({
      errorMessage: '',
      busy: false,
    });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            autocorrect={false}
            label="Email"
            onChangeText={email => this.setState({ email })}
            placeholder="eg: user@gmail.com"
            value={this.state.email}
          />
        </CardSection>
        <CardSection>
          <Input
            autocorrect={false}
            label="Password"
            onChangeText={password => this.setState({ password })}
            placeholder="your password"
            secureTextEntry
            value={this.state.password}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.errorMessage}
        </Text>

        <CardSection>
          {
            this.state.busy ?
            <Spinner /> :
            <Button onPress={this.handleLoginButtonPress}>Login</Button>
          }
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
