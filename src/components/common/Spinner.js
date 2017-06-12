import React from 'react';
import {
  ActivityIndicator,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = {
  spinnerStyle: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
};

const Spinner = ({ size }) => (
  <View style={styles.spinnerStyle}>
    <ActivityIndicator size={size} />
  </View>
);

Spinner.defaultProps = {
  size: 'small',
};

Spinner.propTypes = {
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['small', 'large']),
    PropTypes.number,
  ]),
};

export { Spinner };
