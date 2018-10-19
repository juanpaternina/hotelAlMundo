const axios = require('axios');
export const API_URL = 'http://192.168.0.16:3000';

export const getHotels = () => {
	const reqUrl = `${API_URL}/hotels`;
	return axios.get(reqUrl);
};

export const searchHotelBy = term => {
	const reqUrl = `${API_URL}/hotels?search=${term}`;
	return axios.get(reqUrl);
};
