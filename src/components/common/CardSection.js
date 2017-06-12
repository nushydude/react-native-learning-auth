import React from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';

const style = {
  containerStyle: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 5,
    position: 'relative',
  },
};


const CardSection = (props) => {
  return (
    <View style={style.containerStyle}>
      {props.children}
    </View>
  );
};


CardSection.defaultProps = {
  children: null,
};

CardSection.propTypes = {
  children: React.PropTypes.oneOfType([
    PropTypes.arrayOf(React.PropTypes.node),
    PropTypes.node,
  ]),
};

export default CardSection;
