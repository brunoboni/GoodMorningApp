import React, { Component } from 'react'
import { View,StatusBar } from 'react-native'
import { connect } from 'react-redux'
import Navigation from './Navigation/Navigation'
import { bgStatusBar, bgHeader, Colors } from '../../theme/Colors';


class Home extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <StatusBar
                    translucent
                    backgroundColor={bgStatusBar}
                    animated
                />
                <Navigation />
            </View>
        )
    }

}

export default Home;