import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  DrawerItems,
} from 'react-navigation';
import {
  bgDrawerHeader,
  drawerLogoColor,
  headerColor,
  bgDrawer,
} from '../../theme/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux'

class SideMenu extends React.Component{
// const SideMenu = (props) => (
  render(){
    return(  
<ScrollView style={styles.container}>
    <View style={styles.header}>
      <View style={styles.headerLogo}>
        <Icon name="md-contact" size={50} color={drawerLogoColor} />
      </View>
      <View style={styles.subTitle}>
        <Text style={styles.drawerTitle}>{this.props.name}</Text>
        <Text style={styles.drawerEmail}>{this.props.email}</Text>
      </View>
    </View>
    <DrawerItems {...this.props} />
  </ScrollView>
// );
    )}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgDrawer,
  },
  header: {
    flexDirection: 'column',
    paddingTop: 40, // 24dp (Space for the translucent StatusBar) plus 16dp Android Header paddingTop
    paddingLeft: 16,
    height: 170,
    backgroundColor: bgDrawerHeader,
  },
  headerLogo: {
    width: 64,
    height:64,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  subTitle: {
    height: 56,
    paddingTop: 8,
  },
  drawerTitle: {
    color: headerColor,
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 14,
  },
  drawerEmail: {
    color: headerColor,
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 14,
  },
});



const mapStateToProps = state => {
  return (
      {
          name: state.AuthReducer.name,
          email: state.AuthReducer.email
      }
  );
}

export default connect( mapStateToProps, null)(SideMenu);

