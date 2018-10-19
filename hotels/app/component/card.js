import React from 'react';
import { View } from 'react-native';

const Card = props => (
	<View
		style={[{ borderRadius: 5, backgroundColor: 'white', elevation: 4, marginBottom: 3, marginTop: 3 }, props.style]}
	>
		{props.children}
	</View>
);

export default Card;
