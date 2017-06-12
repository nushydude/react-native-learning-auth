import React from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
};

const Card = (props) => (
  <View style={styles.containerStyle}>
    {props.children}
  </View>
);

Card.defaultProps = {
  children: null,
};

Card.propTypes = {
  children: React.PropTypes.oneOfType([
    PropTypes.arrayOf(React.PropTypes.node),
    PropTypes.node,
  ]),
};


export { Card };
