import React from 'react'
import {ActivityIndicator} from 'react-native'

export default props = () => {
        if (props.loading) {
            return (
                <ActivityIndicator size="large" />
            )
        }
        return (
            <Button full rounded
                onPress={() => props.action()}
                accessibilityLabel={props.label}
                style={styles.buttom}>
                <Text>{props.label}</Text>
            </Button>
        )


}

