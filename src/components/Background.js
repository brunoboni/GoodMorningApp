import React from 'react'
import {ImageBackground, StyleSheet, View} from 'react-native'
import { Images } from '../../theme/Images'

export default props =>(
    <ImageBackground source={Images.bgimg} style={styles.img}>
        <View style={styles.container}>
            {props.children}
        </View>
    </ImageBackground>
)

let styles = StyleSheet.create({
    img:{
        flex:1, 
    },
    container: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255, 0.3)',
    },
})