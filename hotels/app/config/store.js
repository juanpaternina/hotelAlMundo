import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducers';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

let store = createStore(reducer, undefined, compose(applyMiddleware(thunkMiddleware, loggerMiddleware)));

module.exports = {
	store,
};
