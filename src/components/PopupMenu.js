import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { headerColor } from '../../theme/Colors';
import Icon from 'react-native-vector-icons/Ionicons'
import {
  View,
  UIManager,
  findNodeHandle,
  StyleSheet,
  TouchableOpacity,
}from 'react-native';

const ICON_SIZE = 24;

class PopupMenu extends Component {
  static propTypes = {
    // array of strings, will be list items of Menu
    labels:  PropTypes.arrayOf(PropTypes.string).isRequired,
    onPress: PropTypes.func.isRequired
  }

  onError = () => {
    console.log('There is an error.')
  };

  handleMenuPress = () => {
    const { labels, onPress } = this.props;
    UIManager.showPopupMenu(
      findNodeHandle(this.refs.menu),
      labels,
      this.onError,
      (result, index) => {
        if (onPress) {
          onPress({ action: 'menu', result, index });
        }
      },
    );
  };

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.handleMenuPress}>
          <Icon
            name="md-more"
            size={30}
            color={headerColor}
            ref="menu"
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default PopupMenu;
