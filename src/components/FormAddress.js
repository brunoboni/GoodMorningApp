import React, { Component } from 'react'
import { View, ScrollView, Text, ActivityIndicator, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import {
    Container, Header, Content, Item, Body, Input,
    Icon, Picker, Button, Footer, Form, FooterTab, CheckBox, Select
} from 'native-base';
import {
    upsertAddress 
} from '../actions/AddressActions'
import { Labels } from '../../theme/Labels'
import { Colors } from '../../theme/Colors'
import { Images } from '../../theme/Images'
import Background from './Background'
import { Field, reduxForm } from 'redux-form'
import InputField from './Template/InputField'
import PickerInput from './Template/PickerInput'
import _ from 'lodash'

const validate = props => {
    const error = {}
    error.addresstype = ''
    error.street = ''
    error.number = ''
    error.zipcode = ''
    var addresserr = props.addresstype;
    var streeterr = props.street;
    var numbererr = props.number;
    var zipcodeerr = props.zipcode;
    //Validation rules
    if (props.addresstype === undefined) {
        addresserr = '';
    }
    if (props.street === undefined) {
        streeterr = '';
    }
    if (props.number === undefined) {
        numbererr = '';
    }
    if (props.zipcode === undefined) {
        zipcodeerr = '';
    }

    if (props.addresstype === 'undefined' || props.addresstype === '')
        error.addresstype = 'Error in addres type'
    if (!props.street || props.street === '' || props.street.length < 5)
        error.street = 'Error in Street field'
    if (!props.number)
        error.number = 'Error in Number Field'
    if (!props.zipcode || props.zipcode.length != 8)
        error.zipcode = 'Error in ZipCode field'

    return error;
}

class FormAddress extends Component {

    renderInput({ input, label, type,
        meta: { touched, error, warning } }) {
        var hasError = false
        if (error !== undefined) {
            hasError = true
        }

        return (
            <Item rounded style={styles.inputfield} error={hasError}>
                <Input {...input} placeholder={label}
                    value={input.value}
                    placeholderTextColor={Colors.placeholderform}
                    keyboardType={type} />
                {hasError ? <Icon active name='md-close-circle' /> : <Text />}
            </Item>
        )
    }
    render() {
        const { handleSubmit, submitting, address } = this.props

        return (
           <Background>
                <ScrollView keyboardShouldPersistTaps={'handled'}>
                    <Container style={{ padding: 10 }}>
                        <Content>
                            <Form>
                                <Field
                                    name="addresstype"
                                    component={PickerInput}
                                    placeholder='Tipo de Endereço'
                                    iosHeader="Selecione"
                                    mode="dropdown"
                                >
                                    <Item label="Casa" value="Casa" />
                                    <Item label="Trabalho" value="Trabalho" />
                                    <Item label="Outros" value="Outros" />
                                </Field>
                                <Field name="zipcode" label={"Cep"} type={'numeric'} component={this.renderInput} />
                                <Field name="street" label="Rua" component={this.renderInput} />
                                <Field name="number" label="Numero" type='numeric' component={this.renderInput} />
                                <Field name="city" label="Cidade" component={this.renderInput}/>
                                <Field name="district" label="Bairro" component={this.renderInput} />
                                <Field name="referency" label="Referencia" component={this.renderInput} />


                                <Button full rounded
                                    onPress={handleSubmit(values => { this.props.upsertAddress(values)})}
                                    submitting={submitting}
                                    accessibilityLabel="Salvar"
                                    style={styles.buttom}>
                                    <Text>{Labels.save}</Text>
                                </Button>

                            </Form>
                        </Content>
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
    itempicker: {
        color: Colors.placeholderform,
        fontSize: 18
    },
    buttom: {
        marginTop: 10,
        backgroundColor: Colors.button,
    },

});
const mapStateToProps = state => {
    return (
        {
            initialValues: state.AddressReducer
        }
    );
    
}
FormAddress = reduxForm({
    form: 'addressForm',
    validate,
    enableReinitialize: true

})(FormAddress)

FormAddress = connect(
    mapStateToProps
    ,
    { upsertAddress }
)(FormAddress)


export default FormAddress


