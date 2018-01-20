import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import FormLogin from './components/FormLogin'
import FormRegister from './components/FormRegister'
// import Welcome from './components/Welcome'
import Home from './components/Home'


import { Colors } from '.././theme/Colors'


export default props => (

    <Router navigationBarStyle={{ backgroundColor: Colors.colortheme }} titleStyle={{ color: '#fff' }}>
        <Scene key="root" >
            <Scene key='Home' component={Home} title="Home" hideNavBar={true} />
            {/* <Scene key='formLogin' component={FormLogin} title="Login" hideNavBar={true} initial={true} /> */}
            <Scene key='formRegister' component={FormRegister} title="Cadastro" hideNavBar={false} />
            {/* <Scene key='Home' component={Home} title="Login" hideNavBar={true} /> */}
        </Scene>
    </Router>
);



