import React from 'react';
import { Font } from 'expo';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { Text } from 'react-native'
import Routes from './src/Routes';
import Reducers from './src/reducers';
import {firebaseconfig} from './config'
// import Navigation from './src/components/Navigation/Navigation'
// import { bgStatusBar, bgHeader } from './theme/Colors';

const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk))

class App extends React.Component {

  state = { fontLoaded: false, };
  async componentDidMount() {
    await Font.loadAsync({
      'Roboto-Black': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
      'Roboto': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
      'Roboto-medium': require('./assets/fonts/Roboto/Roboto-Medium.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  componentWillMount() {
    firebase.initializeApp(firebaseconfig);
  }

  render() {
    return (

      this.state.fontLoaded ? (
        <Provider store={store}>
          <Routes />
        </Provider>
      ) : null 


    );
  }
}
export default App;
