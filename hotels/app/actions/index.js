import { getHotels, searchHotelBy } from '../api';

function makeActionCreator(type, ...argNames) {
	return function(...args) {
		const action = { type };
		argNames.forEach((arg, index) => {
			action[argNames[index]] = args[index];
		});
		return action;
	};
}

export const IS_FETCHING_HOTELS = 'IS_FETCHING_HOTELS';
export const SET_HOTELS = 'SET_HOTELS';

export const isFetchingHotels = makeActionCreator(IS_FETCHING_HOTELS, 'isFetching');
export const setHotels = makeActionCreator(SET_HOTELS, 'hotels');

export const fetchHotels = () => async (dispatch, getState) => {
	dispatch(isFetchingHotels(true));
	const hotels = await getHotels();
	dispatch(setHotels(hotels.data));
	dispatch(isFetchingHotels(false));
};

export const searchHotel = term => async (dispatch, getState) => {
	dispatch(isFetchingHotels(true));
	const hotels = await searchHotelBy(term);
	dispatch(setHotels(hotels.data));
	dispatch(isFetchingHotels(false));
};
