import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';

import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
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
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
