import { combineReducers } from 'redux';

import flashMessages from './reducers/flashMessages.js';
import authReducer from './reducers/authReducer.js';
import navReducer from './reducers/navReducer.js';


export default combineReducers({
    flashMessages,
    authReducer,
    navReducer
});
