import React from 'react';
import { Font, Constants, Location, Permissions } from 'expo';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Routes from './src/Routes';
import Reducers from './src/reducers';
import { firebaseconfig } from './config'
import { Platform } from 'react-native';


const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk))

class App extends React.Component {

  state = {
    fontLoaded: false,
    location: null,
    errorMessage: null,
  };
  

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

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

    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
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
