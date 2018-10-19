/* @flow */

import React from 'react';
import { View } from 'react-native';
import Navigator from '../../containers/Navigator';
import NavigationService from '../../helpers/NavigationService';

export default class Main extends React.Component {
	componentDidMount() {
		this.props.verifyUpdate;
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Navigator
					ref={navigatorRef => {
						NavigationService.setTopLevelNavigator(navigatorRef);
					}}
				/>
			</View>
		);
	}
}
