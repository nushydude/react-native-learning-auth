import React from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = {
  containerStyle: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  inputStyle: {
    flex: 2,
    fontSize: 18,
  },
  labelStyle: {
    flex: 1,
    fontSize: 18,
  },
};

const Input = ({ autocorrect, label, onChangeText, placeholder, secureTextEntry, value }) => (
  <View style={styles.containerStyle}>
    <Text style={styles.labelStyle}>{ label }</Text>
    <TextInput
      autoCorrect={autocorrect}
      onChange={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      style={styles.inputStyle}
      value={value}
    />
  </View>
);

Input.defaultProps = {
  autocorrect: true,
  placeholder: '',
  secureTextEntry: false,
};

Input.propTypes = {
  autocorrect: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  value: PropTypes.string.isRequired,
};

export { Input };
