/* @flow */

import React from 'react';
import { View, Text, FlatList, TextInput, Image } from 'react-native';
import { styles } from './styles.js';
import Card from '../../component/card';
import Hotel from '../../component/hotel';
import SearchBox from '../../component/searchInput';

import debounce from 'debounce';

export default class Main extends React.Component {
	static navigationOptions = {
		title: 'Lista de hoteles',
	};

	constructor(props) {
		super(props);
		this.onSearchDelayed = debounce(this.onSearch.bind(this), 200);
	}

	componentDidMount() {
		this.props.fetchHotels();
	}

	onSearch(text) {
		this.props.searchHotel(text);
	}

	renderSearching() {
		return <Image source={require('../../../assets/searching.gif')} style={{ width: 100, height: 100 }} />;
	}

	render() {
		return (
			<View style={styles.container}>
				<SearchBox style={styles.input} onChangeText={this.onSearchDelayed} placeholder="Que hotel estas buscando?" />
				{this.props.isFetching ? (
					<View style={{ flex: 1, justifyContent: 'center', marginTop: -100 }}>
						<Card style={styles.loadingCard}>{this.renderSearching()}</Card>
					</View>
				) : (
					<View style={{ flex: 1 }}>
						{this.props.hotels.length > 0 ? (
							<FlatList
								testID="hotelList"
								data={this.props.hotels}
								renderItem={item => <Hotel data={item} onPress={() => this.props.showHotelDeatil(item)} />}
							/>
						) : (
							<Text style={{ textAlign: 'center', justifyContent: 'center' }}>
								No existen resultados para tu busqueda, intenta con otro termino
							</Text>
						)}
					</View>
				)}
			</View>
		);
	}
}
