import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/config/store';
import AppRoot from './app/containers/AppRoot';

var persistor;

export default class App extends React.Component {
	render() {
		{
			return (
				<Provider store={store}>
					<AppRoot />
				</Provider>
			);
		}
	}
}
