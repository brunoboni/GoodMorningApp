import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  Header,
  Input,
  Item,
  Button
} from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons';
import { headerColor } from '../../theme/Colors';

const menuIcon = (<Icon name="md-menu" size={30} color={headerColor} />);

const AppBarLeft = ({ navigation }) => (
  <View style={styles.headerLeft}>
    <TouchableOpacity
      onPress={() => navigation.navigate('DrawerOpen')}
    >
      {menuIcon}
    </TouchableOpacity>
      {/* <View style={{paddingBottom: 1, paddingLeft: 4}}>
            <Input placeholder='Pesquisar'/>
    </View> */}
  </View>
);

AppBarLeft.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  headerLeft: {
    flexDirection: 'row',
  },
});

export default AppBarLeft;
