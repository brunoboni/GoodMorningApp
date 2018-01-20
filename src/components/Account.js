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
import {
    changeEmail,
    changePassword,
    changeConfirmPassword,
    changeNomatchpassword,
    changePhone,
    changeName,
    authEmail,
    register,
    getUser
} from '../actions/AuthActions';
import { Labels } from '../../theme/Labels'
import { Colors } from '../../theme/Colors'
import { Images } from '../../theme/Images'
import Background from './Background'

class Account extends Component {
    // componentWillMount(){
    //     const {email} = this.props
    //     this.getUser(email);
    // }

    _register() {

        const { name, email, password, phone, confirmpassword, checkemail } = this.props;


        password !== confirmpassword ?
            this.props.changeNomatchpassword(Labels.errorpassword)
            : this.props.register({ name, email, password, phone ,checkemail});
    };

    _renderBtnRegister() {
        if (this.props.loading_cadastro) {
            return (
                <ActivityIndicator size="large" />
            )
        }
        return (
            <Button full rounded

                onPress={() => this._register()}
                accessibilityLabel="Entrar"
                style={styles.buttom}>
                <Text>{Labels.register}</Text>
            </Button>
        )
    }
    _changeCheckBox(value) {
        return this.props.authEmail(this.props.checkemail);
    }
    render() {
        return (
            <Background>
               <ScrollView>
                <Container style={{ padding: 10 }}>
                    <Item rounded style={styles.inputfield}>
                        <Input placeholder={Labels.name}
                            value={this.props.name}
                            placeholderTextColor={Colors.placeholderform}
                            onChangeText={text => this.props.changeName(text)} />
                    </Item>
                    <Item rounded style={styles.inputfield}>
                        <Input placeholder={Labels.phone}
                            value={this.props.phone}
                            placeholderTextColor={Colors.placeholderform}
                            onChangeText={text => this.props.changePhone(text)} />
                    </Item>
                    <Item rounded style={styles.inputfield}>
                        <Input placeholder={Labels.email}
                            disabled
                            value={this.props.email}
                            placeholderTextColor={Colors.placeholderform}
                            onChangeText={text => this.props.changeEmail(text)} />
                    </Item>
                    <Item rounded style={styles.inputfield}>
                        <Input
                            secureTextEntry
                            placeholder={Labels.password}
                            value={this.props.password}
                            placeholderTextColor={Colors.placeholderform}
                            onChangeText={text => this.props.changePassword(text)} />
                    </Item>
                    <Item rounded style={styles.inputfield}>
                        <Input
                            secureTextEntry
                            placeholder={Labels.confirmpassword}
                            placeholderTextColor={Colors.placeholderform}
                            onChangeText={text => this.props.changeConfirmPassword(text)} />
                    </Item>
                    <View>
                        <Text style={styles.texterror}>
                            {this.props.nomatchpassword}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <CheckBox
                            onPress={(value) => this._changeCheckBox(value)}
                            checked={this.props.checkemail} />
                        <Text style={{ paddingLeft: 15 }}>
                            {Labels.confirmenvioemail}
                        </Text>
                    </View>
                    <View style={{marginTop: 20}}>
                        <Text>
                            Ao clicar em cadastrar você concorda com os termos e
                        politicas de Privacidade
                    </Text>
                        {this._renderBtnRegister()}
                    </View>
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
            name: state.AuthReducer.name,
            email: state.AuthReducer.email,
            phone: state.AuthReducer.phone,
            password: state.AuthReducer.password,
            confirmpassword: state.AuthReducer.confirmpassword,
            erroCadastro: state.AuthReducer.erroCadastro,
            loading_cadastro: state.AuthReducer.loading_cadastro,
            nomatchpassword: state.AuthReducer.nomatchpassword,
            checkemail: state.AuthReducer.checkemail
        }
    );
}

export default connect(
    mapStateToProps,
    {
        changeEmail,
        changePassword,
        changeConfirmPassword,
        changeNomatchpassword,
        changePhone,
        changeName,
        authEmail,
        register,
        getUser
    }
)(Account);