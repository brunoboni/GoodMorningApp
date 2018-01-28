import React, { Component } from 'react'
import { View, ScrollView, Text, ActivityIndicator, StyleSheet, ListView } from 'react-native'
import { connect } from 'react-redux'
import {
    Container,
    Header,
    Content,
    Item,
    Icon,
    Body,
    Right,
    Input,
    Button,
    Footer,
    FooterTab,
    CheckBox
} from 'native-base';
import {
    getAdress
} from '../actions/AddressActions'
import { Labels } from '../../theme/Labels'
import { Colors, headerColor } from '../../theme/Colors'
import { Images } from '../../theme/Images'
import Background from './Background'
import CardAddress from './CardAddress'
import { Actions } from 'react-native-router-flux'
import _ from 'lodash'
import {  Location } from 'expo';




class Address extends Component {
    componentWillMount() {
        this.props.getAdress()
        this._createDataSource(this.props.addresslist)
        this._getPosition()
    }
    componentWillReceiveProps(nextProps) {
        this._createDataSource(nextProps.addresslist)
    }

    _createDataSource(data) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        this.list = ds.cloneWithRows(data)
    }
    _getPosition = async () =>{

        let position = await Location.getCurrentPositionAsync()

        console.log('location' , position)
    }

    _renderBtn() {
        if (this.props.loading) {
            return (
                <ActivityIndicator size="large" />
            )
        }
        return (
            <Button full style={{ flexDirection: 'row', }}
                onPress={() => Actions.FormAddress()}
                accessibilityLabel={Labels.new}
                style={styles.buttom}>
                <Text>{Labels.new}</Text>
            </Button>
        )
    }

    render() {
        return (
            <Background>
                <Container>
                    <Content>
                        <ListView

                            enableEmptySections
                            dataSource={this.list}
                            renderRow={data => <CardAddress address={data} />}
                        />
                    </Content>
                    <Footer style={{backgroundColor: 'transparent'}}>
                        <FooterTab>
                            {this._renderBtn()}
                        </FooterTab>
                    </Footer>
                </Container>
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
    text: {
        color: headerColor,
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: 14,
    },

});

const mapStateToProps = state => {
    
    const addresslist = _.map(state.AddressListReducer, (val, uid) => {
        return { ...val, uid }
    })
    return {
        addresslist
    }
}


export default connect(mapStateToProps,
    {
        getAdress
    })(Address);