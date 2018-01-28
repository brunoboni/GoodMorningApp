import { combineReducers } from 'redux';
import AppReducer from './AppReducer';

import AuthReducer from './AuthReducer';
import AddressReducer from './AddressReducer';
import AddressListReducer from './AddressListReducer';
import { reducer as formReducer } from 'redux-form';
import nav from './nav';

const reducers = {
    form: formReducer,
    AppReducer,
    AuthReducer,
    AddressReducer,
    AddressListReducer,
    nav
  }




  const allReducers= combineReducers(reducers);
  export default allReducers;
  

// export default combineReducers({
//     AppReducer,
//     AuthReducer,
//     AddressReducer,
//     nav
// });