import { combineReducers } from 'redux';
import mainReducer from './MainReducer.js';

const appReducer = combineReducers({
	main: mainReducer,
});

export default appReducer;
