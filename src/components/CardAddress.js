import React, { Component } from 'react';
import { Container, Button, Left, View, Body, Header, Content, Card, CardItem, Text, Icon, Right } from 'native-base';



export default props => (
<Card style={{ flex: 0 }}>
        <CardItem>
            <Left>
                <Icon active name={props.icon}
                    style={{ color: 'blue' }} />
                <Body>
                    <Text>{props.type}</Text>
                    <Text note>{props.street}</Text>
                </Body>
            </Left>
        </CardItem>
        <CardItem>
            <Body>
                <Text>
                    Your text here
                </Text>
            </Body>
        </CardItem>
        <CardItem>
            <Left>
            <Button transparent
                    onPress={() => alert('editar')}>
                    <Icon active name="md-build" style={{ color: 'green' }} />
                    <Text style={{ color: 'green' }}>Editar</Text>
                </Button>
            </Left>
            <Right>
                <Button transparent
                    onPress={() => alert('excluir')}>
                    <Icon active name="md-remove-circle" style={{ color: 'red' }} />
                    <Text style={{ color: 'red' }}>Excluir</Text>
                </Button>
            </Right>
        </CardItem>

    </Card>
)