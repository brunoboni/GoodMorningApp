import React, { Component } from 'react'
import {  Image, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import {
    Container,
    Card,
    CardItem,
    Thumbnail,
    Left,
    Right,
    Icon,
    Body,
    Button
} from 'native-base';
import {
    changeEmail,
    changePassword,
    changeConfirmPassword,
    changeNomatchpassword,
    changePhone,
    changeName,
    authEmail,
    register
} from '../actions/AuthActions';
import { Labels } from '../../theme/Labels'
import { Colors } from '../../theme/Colors'
import { Images } from '../../theme/Images'
import Background from './Background'


const img = require('../../imgs/avatarpadaria.jpg')
const img1 = require('../../imgs/pao.jpeg')
class Welcome extends Component {
    render() {
        return (
            <Container>

                <Background>
                    
                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={img} />
                                <Body>
                                    <Text>Rainha do Parque</Text>
                                    <Text note>A melhor padaria do Edu Chaves</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={img1} style={{ height: 200, width: null, flex: 1 }} />
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent style={{ paddingRight: 20, paddingLeft: 20 }}>
                                    <Text >Entrar</Text>
                                </Button>
                            </Left>
                            <Body>

                            </Body>
                            <Right>
                                <Button transparent>
                                    <Icon active name="heart" />
                                    <Text> 12 Likes</Text>
                                </Button>
                            </Right>
                        </CardItem>
                    </Card>


                </Background>
            </Container>
        )
    }

}
export default Welcome;