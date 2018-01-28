import React, { Component } from 'react';
import { Container, Button, Left, View, Body, Header, Content, Card, CardItem, Text, Icon, Right } from 'native-base';
import { Colors } from '../../theme/Colors'
import { Actions } from 'react-native-router-flux'
import { onSelectAddress, deleteAddress } from '../actions/AddressActions';
import {connect} from 'react-redux'

class CardAddress extends Component {
    _setIconType(){
        switch(this.props.address.addresstype){
            case 'Casa':
                return 'md-home'
            case 'Trabalho':
                return 'md-boat'
            case 'Outros':
                return 'md-search'
            default:
                return 'md-plus'            
        }
    }

    render() {
        const {address}=this.props
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Icon active name='md-home'
                            style={{ color: Colors.colortheme }} />
                        <Body>
                            <Text style={{ fontFamily: 'Roboto-Black', fontSize: 15 }}>
                                {this.props.address.addresstype}
                            </Text>
                            <Text note>{this.props.address.street}
                                     , {this.props.address.number} 
                            </Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text style={{ fontFamily: 'Roboto-Black', fontSize: 15 }}>
                           Bairro:  {this.props.address.district} 
                        </Text>
                        <Text style={{ fontFamily: 'Roboto-Black', fontSize: 15 }}>
                           Cep:  {this.props.address.zipcode} 
                        </Text>
                        <Text style={{ fontFamily: 'Roboto-Black', fontSize: 15 }}>
                           Cidade:  {this.props.address.city} 
                        </Text>
                    </Body>
                </CardItem>
                <CardItem footer>
                    <Left>
                        <Button transparent
                            onPress={() => this.props.onSelectAddress(address)}>
                            <Icon active name="md-build"
                                style={{ color: 'green' }} />
                            <Text style={{ color: 'green' }}>Editar</Text>
                        </Button>
                    </Left>
                    <Right>
                        <Button transparent
                            onPress={() => this.props.deleteAddress(address)}>
                            <Icon active name="md-remove-circle" style={{ color: 'red' }} />
                            <Text style={{ color: 'red' }}>Excluir</Text>
                        </Button>
                    </Right>
                </CardItem>

            </Card>
        )
    }
}

export default connect(null, {onSelectAddress, deleteAddress})(CardAddress)