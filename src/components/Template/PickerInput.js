import React from 'react';
import { Item, Input, Text, Picker } from 'native-base'
import { StyleSheet } from 'react-native'
import { Labels } from '../../../theme/Labels'
import { Colors } from '../../../theme/Colors'
import { Images } from '../../../theme/Images'


export default props => {
    const { placeholder, 
        input: { onChange, value, ...inputProps },
        children, ...pickerProps } = props;
    return (
        <Item rounded style={styles.inputfield}>
            <Picker
                headerStyle={{ backgroundColor: Colors.button }}
                headerBackButtonTextStyle={{ color: "#fff" }}
                headerTitleStyle={{ color: "#fff" }}

                placeholder={placeholder}
                selectedValue={value}
                placeholderTextColor={Colors.placeholderform}
                onValueChange={value => onChange(value)}
                { ...inputProps }
                { ...pickerProps }
            >
                {children}
            </Picker>
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



