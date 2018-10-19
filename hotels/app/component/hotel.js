import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { API_URL } from '../api';

import Card from './card';

const yellow = '#FFD700';

const Hotel = props => (
	<TouchableOpacity onPress={props.onPress}>
		<Card style={styles.container}>
			<Image resizeMode="cover" style={styles.image} source={{ uri: `${API_URL}${props.data.item.images[0]}` }} />
			<View style={styles.descriptionContainer}>
				<View style={styles.nameContainer}>
					<Text style={styles.name}>{props.data.item.name}</Text>
					<View style={{ flexDirection: 'row' }}>{Hotel.renderStars(props.data.item.stars)}</View>
				</View>
				<View style={styles.priceContainer}>
					<Text style={styles.titlePrice}>Precio por noche</Text>
					<Text style={styles.price}>
						{props.data.item.currency} ${props.data.item.price.toLocaleString()}
					</Text>
				</View>
			</View>
		</Card>
	</TouchableOpacity>
);

Hotel.renderStars = stars => {
	let finalStars = [];
	for (let index = 0; index < stars; index++) {
		finalStars.push(<Ionicons name="md-star" size={25} color={yellow} />);
	}
	return finalStars;
};

const styles = StyleSheet.create({
	container: {
		marginLeft: 8,
		marginRight: 8,
		marginBottom: 10,
	},
	image: {
		height: 170,
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
	},
	descriptionContainer: {
		flexDirection: 'row',
		padding: 8,
	},
	nameContainer: {
		flex: 1,
	},
	priceContainer: {},
	name: {
		fontWeight: 'bold',
		fontSize: 16,
	},
	titlePrice: {
		color: '#ccc',
		fontSize: 13,
		textAlign: 'center',
	},
	price: {
		textAlign: 'center',
		color: yellow,
		fontWeight: 'bold',
		marginTop: 4,
		fontSize: 16,
	},
});

export default Hotel;
