/* @flow */

import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles.js';
import { MapView } from 'expo';

import Card from '../../component/card';
import { Ionicons } from '@expo/vector-icons';
const yellow = '#FFD700';

export default class Main extends React.Component {
	static navigationOptions = ({ navigation }) => ({
		title: navigation.state.params.item.item.name,
	});

	renderStars = stars => {
		let finalStars = [];
		for (let index = 0; index < stars; index++) {
			finalStars.push(<Ionicons name="md-star" size={25} color={yellow} />);
		}
		return finalStars;
	};

	render() {
		const { state } = this.props.navigation;

		return (
			<View style={styles.container}>
				<Card style={styles.cardContianer}>
					<View style={styles.descriptionContainer}>
						<View style={styles.nameContainer}>
							<Text style={styles.name}>{state.params.item.item.name}</Text>
							<View style={{ flexDirection: 'row' }}>{this.renderStars(state.params.item.item.stars)}</View>
						</View>
					</View>
					<View style={styles.addressContainer}>
						<Ionicons style={styles.icon} name="md-navigate" size={45} color={'#555'} />
						<Text style={styles.address}>{state.params.item.item.address || ''}</Text>
					</View>
					<View style={{ height: 200 }}>
						<MapView
							style={{ flex: 1 }}
							initialRegion={{
								...state.params.item.item.coordinates,
								latitudeDelta: 0.007,
								longitudeDelta: 0.007,
							}}
						>
							<MapView.Marker
								coordinate={state.params.item.item.coordinates}
								title="My Marker"
								description="Some description"
							/>
						</MapView>
					</View>
				</Card>
			</View>
		);
	}
}

// const { state } = this.props.navigation;

// 		return (
// 			<View style={{ flex: 1, backgroundColor: '#fff' }}>
// 				{/* <NavigationBar showBack={true} title={state.params.title} /> */}
// 				<WebView startInLoadingState={true} source={{ uri: state.params.url }} />
// 			</View>
// 		);
