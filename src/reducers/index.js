import { combineReducers } from 'redux';
import AppReducer from './AppReducer';
import AuthReducer from './AuthReducer';
import nav from './nav';

export default combineReducers({
    AppReducer,
    AuthReducer,
    nav
});