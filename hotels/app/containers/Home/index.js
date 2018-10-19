/* @flow weak */

import { connect } from 'react-redux';
import Component from './component';
import NavigationService from '../../helpers/NavigationService';

import { fetchHotels, searchHotel } from '../../actions';

const mapStateToProps = state => ({
	hotels: state.main.hotels,
	isFetching: state.main.isFetching,
});
const mapDispatchToProps = dispatch => ({
	fetchHotels: () => {
		dispatch(fetchHotels());
	},
	searchHotel: term => {
		dispatch(searchHotel(term));
	},
	showHotelDeatil: item => {
		NavigationService.navigate('DetailScreen', {
			item,
		});
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
