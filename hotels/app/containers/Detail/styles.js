import { StyleSheet, Platform } from 'react-native';
//import { Color } from '../../widgets';
const yellow = '#FFD700';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#eee',
	},
	cardContianer: {
		marginLeft: 8,
		marginRight: 8,
		marginBottom: 10,
		marginTop: 10,
		backgroundColor: 'white',
	},
	descriptionContainer: {
		flexDirection: 'row',
		padding: 8,
	},
	addressContainer: {
		padding: 8,
		paddingTop: 0,
		flexDirection: 'row',
	},
	address: {
		flex: 0.8,
		fontWeight: 'bold',
		color: '#bbb',
	},
	icon: {
		flex: 0.2,
		textAlign: 'center',
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
