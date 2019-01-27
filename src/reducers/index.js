import { combineReducers } from 'redux';
import dashboard from './dashboard';

const appReducer = combineReducers({
    dashboard,
});

export default appReducer;
