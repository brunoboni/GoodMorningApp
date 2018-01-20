import React, { Component } from 'react'
import { View,ScrollView, Text, ActivityIndicator, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import {
    Container,
    Header,
    Content,
    Item,
    Body,
    Input,
    Button,
    Footer,
    FooterTab,
    CheckBox
} from 'native-base';
// import {
//     changeEmail,
//     changePassword,
//     changeConfirmPassword,
//     changeNomatchpassword,
//     changePhone,
//     changeName,
//     authEmail,
//     register
// } from '../actions/AuthActions';
import { Labels } from '../../theme/Labels'
import { Colors } from '../../theme/Colors'
import { Images } from '../../theme/Images'
import Background from './Background'
import CardAddress from './CardAddress'

class Address extends Component {
    _cardAddress(){
       return(
        <CardAddress 
        type = 'Casa'
        street='Alto Paraguai'/>
       )
    }
    
    render() {
        return (
            <Background>
               <ScrollView>
                <Container style={{ padding: 10 }}>
                   {this._cardAddress()} 
                </Container>
                </ScrollView>
            </Background>

        );
    }
}
let styles = StyleSheet.create({
    inputfield: {
        marginTop: 10,
        backgroundColor: Colors.inputfield,
    },
    buttom: {
        marginTop: 10,
        backgroundColor: Colors.button,
    },
    texterror: {
        color: '#ff0000',
        fontSize: 18
    },

});

const mapStateToProps = state => {
    return (
        {
            null:null
        }
    );
}

export default connect(mapStateToProps, null)(Address);