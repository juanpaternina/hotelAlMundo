import { IS_FETCHING_HOTELS, SET_HOTELS } from '.././actions';

const initialState = {
	isFetching: false,
	hotels: [],
	rate: 0,
};

export default (info = (state = initialState, action) => {
	switch (action.type) {
		case IS_FETCHING_HOTELS:
			return {
				...state,
				isFetching: action.isFetching,
			};
		case SET_HOTELS:
			return {
				...state,
				hotels: action.hotels,
			};

		default:
			return state;
	}
});
