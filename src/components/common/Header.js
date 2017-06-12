import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = {
  headerStyle: {
    alignItems: 'center',
    backgroundColor: '#e8e8e8',
    elevation: 2, // this is used instead of shadow
    justifyContent: 'center',
    padding: 10,
    shadowColor: '#000000', // doens't work with Android
    shadowOffset: { width: 0, height: 2 }, // doesn't work with Android
    shadowOpacity: 0.2, // doesn't work wwith Android
  },
  titleStyle: {
    fontSize: 20,
  },
  subtitleStyle: {
    fontSize: 16,
  },
};

class Header extends Component {
  renderSubtitle() {
    if (this.props.subtitle) {
      return (
        <Text style={styles.subtitleStyle}>
          {this.props.subtitle}
        </Text>
      );
    }
    return null;
  }

  render() {
    return (
      <View style={styles.headerStyle}>
        <Text style={styles.titleStyle}>{this.props.title}</Text>
        {
          this.renderSubtitle()
        }
      </View>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

Header.defaultProps = {
  subtitle: null,
};

export default Header;
