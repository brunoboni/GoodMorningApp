import React from 'react';
import {Item, Input, Text} from 'native-base'
import {StyleSheet} from 'react-native'
import { Labels } from '../../../theme/Labels'
import { Colors } from '../../../theme/Colors'
import { Images } from '../../../theme/Images'


export default props => {
    const { input, ...inputProps } = props;
    var hasError = false
    if (input.error !== undefined) {
        hasError = true
    }
    console.log(input)
    console.log(...inputProps)
    return (
        <Item rounded style={styles.inputfield} error={hasError}>
            <Input {...inputProps} 
                placeholder={input.label}
                placeholderTextColor={Colors.placeholderform}
                onChangeText={input.onChange}
                onBlur={input.onBlur}
                onFocus={input.onFocus}
                value={input.value}
                keyboardType={input.type} />
            {hasError ? <Icon active name='md-close-circle' /> : <Text />}
        </Item>
    );
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



