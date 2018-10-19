import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Image, TouchableOpacity, Text } from 'react-native';

export default class Input extends Component {
	focus() {
		this.refs.textfield.focus();
	}

	render() {
		return (
			<View style={[styles.container, this.props.style, { backgroundColor: this.props.background }]}>
				{this.props.icon != undefined && <Image style={styles.icon} source={this.props.icon} />}
				<TextInput
					{...this.props}
					ref="textfield"
					style={[styles.inputField, { color: this.props.textColor, height: this.props.height }]}
					underlineColorAndroid="rgba(0,0,0,0)"
				/>
				{this.props.helpPress != undefined && (
					<TouchableOpacity style={styles.helpContainer} onPress={this.props.helpPress}>
						<Text style={styles.helpContent}>?</Text>
					</TouchableOpacity>
				)}
			</View>
		);
	}
}

Input.defaultProps = {
	placeholderTextColor: '#ACAFBD',
	textColor: '#333',
	background: '#FFF',
	height: 45,
};

const styles = StyleSheet.create({
	container: {
		borderRadius: 20,
		flexDirection: 'row',
		paddingLeft: 10,
	},
	inputField: {
		borderRadius: 30,
		flex: 1,
		marginLeft: 5,
		fontSize: 16,
	},
	icon: {
		marginTop: -2,
		alignSelf: 'center',
		width: 17,
		height: 17,
	},
	helpContainer: {
		backgroundColor: '#7D80DA',
		height: 16,
		width: 16,
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 8,
		marginRight: 10,
	},
	helpContent: {
		backgroundColor: 'rgba(0,0,0,0)',
		color: '#FFF',
		fontWeight: 'bold',
		textAlign: 'center',
		alignSelf: 'center',
		paddingTop: 2,
		fontSize: 12,
	},
});
