import React, { Component } from 'react'
import { Text } from 'react-native'
import { Actions } from 'react-native-router-flux';
import { Button, Icon } from 'native-base'


class Sidebar extends Component {
    _renderButtom(){
        return(

            <Button transparent
            onPress={()=> Actions.sideBarMenu()}>
              <Icon name='menu' />
            </Button>
        )
    }
    
    render() {
        return (
          <Text> teste</Text>
        )
    }

}
export default Sidebar;

