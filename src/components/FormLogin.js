import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native'
import {
    Container,
    Header,
    Content,
    Item,
    Body,
    Input,
    Button,
    Footer,
    FooterTab
} from 'native-base';
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { changeEmail, changePassword, login } from '../actions/AuthActions'
import { Labels } from '../../theme/Labels'
import { Colors } from '../../theme/Colors'
import { Images } from '../../theme/Images'
import Background from './Background'


class FormLogin extends Component {
    _login() {
        const { email, password } = this.props;

        this.props.login({ email, password });
    }
    renderBtnLogin() {

        if (this.props.loading_login) {
            return (
                <ActivityIndicator size="large" />
            )
        }
        return (
            <Button full rounded
                style={styles.buttom}
                onPress={() => this._login()}>
                <Text>{Labels.entry}</Text>
            </Button>
        )
    }
    render() {
        return (
            <Background>
                <Container>
                    <View style={styles.viewtitle}>
                        <Image source={Images.iccoffee} />
                        <Text style={styles.title}>{Labels.titlelogin}</Text>
                    </View>
                    <Body style={{ padding: 20 }}>
                        <Item rounded style={styles.inputfield}>
                            <Input placeholder={Labels.email}
                                placeholderTextColor={Colors.placeholderform}
                                onChangeText={text => this.props.changeEmail(text)} />
                        </Item>
                        <Item rounded style={styles.inputfield}>
                            <Input
                                secureTextEntry
                                placeholder={Labels.password}
                                placeholderTextColor={Colors.placeholderform}
                                onChangeText={text => this.props.changePassword(text)} />
                        </Item>
                        <Text style={styles.texterror}>
                            {this.props.erroLogin}
                        </Text>
                        {this.renderBtnLogin()}
                    </Body>
                    <Footer>
                        <FooterTab>
                            <Button full info style={{ flexDirection: 'row', }}
                                color={Colors.buttoncolor}
                                onPress={() => Actions.formRegister()}
                            >
                                <Text>{Labels.textregister}</Text>
                            </Button>
                        </FooterTab>
                    </Footer>

                </Container>
            </Background>

        );
    }
}

let styles = StyleSheet.create({
    texterror: {
        color: '#ff0000',
        fontSize: 18
    },
    viewtitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    title: {
        fontSize: 25,
        color: '#fff'
    },
    inputfield: {
        marginTop: 10,
        backgroundColor: Colors.inputfield,
    },
    buttom: {
        marginTop: 10,
        backgroundColor: Colors.button,
    },
});

const mapStateToProps = state => (
    {
        email: state.AuthReducer.email,
        password: state.AuthReducer.password,
        erroLogin: state.AuthReducer.erroLogin,
        loading_login: state.AuthReducer.loading_login
    }
)

export default connect(mapStateToProps, { changeEmail, changePassword, login })(FormLogin);