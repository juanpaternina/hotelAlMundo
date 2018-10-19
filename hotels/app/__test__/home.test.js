import { shallow } from 'enzyme';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import React from 'react';
import Home from '../containers/Home/component';
import { apiUrl } from '../api';

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios);

describe('Home', () => {
	describe('Render Elements', () => {
		it('should render a searchBox with testId searchBox', () => {
			const home = shallow(<Home />);
			const input = home.find("[testID='searchBox']");
			expect(input).toHaveLength(1);
		});

		it('should render a flatList with testId hotelList', () => {
			const home = shallow(<Home />);
			const flatlist = home.find("[testID='hotelList']");
			expect(flatlist).toHaveLength(1);
		});
	});

	describe('User Interactions', () => {
		describe('Request to server set response on state', () => {
			const spy = jest.spyOn(Home.prototype, 'onFilter');
			const home = shallow(<Home />);

			const mockData = { bpi: { USD: { rate_float: 5 } } };

			beforeEach(() => {
				const mock = new MockAdapter(axios);
				mock.onGet(apiUrl).reply(200, mockData);
			});

			it('calls the `onFilter` function', () => {
				home.find("[testID='searchBox']").simulate('ChangeText', 'sorpresas');
				expect(spy).toHaveBeenCalled();
			});

			it('sets the `state.rate` to the bitcoin exchange rate that we get from the GET request', () => {
				setTimeout(() => {
					expect(home.state().rate).toEqual(mockData.bpi.USD.rate_float);
				}, 0);
			});
		});
	});
});

// describe('App', () => {
// 	describe('#Text', () => {
// 		it('should render the word "Length" in testId rectangleLengthText', () => {
// 			const app = shallow(<App />);
// 			const text = app
// 				.find("[testID='rectangleLengthText']")
// 				.dive()
// 				.text();
// 			expect(text).toEqual('Length');
// 		});

// 		it('should render the word "Width" in testId rectangleWidthText', () => {
// 			const app = shallow(<App />);
// 			const text = app
// 				.find("[testID='rectangleWidthText']")
// 				.dive()
// 				.text();
// 			expect(text).toEqual('Width');
// 		});
// 	});

// 	describe('#TextInput', () => {
// 		it('should render the input in testId rectangleLengthInput', () => {
// 			const app = shallow(<App />);
// 			const input = app.find("[testID='rectangleLengthInput']");
// 			expect(input).toHaveLength(1);
// 		});
// 	});

// 	describe('#TextInput', () => {
// 		it('should render the input in testId rectangleWidthInput', () => {
// 			const app = shallow(<App />);
// 			const input = app.find("[testID='rectangleWidthInput']");
// 			expect(input).toHaveLength(1);
// 		});
// 	});

// 	describe('#TouchableHighlight', () => {
// 		it('should render the button with testID rectangleAreaButton and text "calculate"', () => {
// 			const app = shallow(<App />);
// 			const button = app.find("[testID='rectangleAreaButton']").dive();
// 			const text = button
// 				.find('Text')
// 				.dive()
// 				.text();
// 			expect(text).toEqual('Calculate');
// 		});
// 	});

// 	describe('User interaction', () => {
// 		it('should update the state of length 0, when an input is 0 and received by testId rectangleLengthInput', () => {
// 			const app = shallow(<App />);
// 			const input = app.find("[testID='rectangleLengthInput']");
// 			input.simulate('ChangeText', 0);
// 			expect(app.state().length).toEqual(0);
// 		});

// 		it('should update the state of length with 100,  when an input is 100 and received by testId rectangleLengthInput', () => {
// 			const app = shallow(<App />);
// 			const input = app.find("[testID='rectangleLengthInput']");
// 			input.simulate('changeText', 100);
// 			expect(app.state().length).toEqual(100);
// 		});

// 		it('should update the state of width with 100,  when an input is 100 and received by testId rectangleWidthInput', () => {
// 			const app = shallow(<App />);
// 			const input = app.find("[testID='rectangleWidthInput']");
// 			input.simulate('changeText', 100);
// 			expect(app.state().width).toEqual(100);
// 		});

// 		it('should calculate the area, which is 0 when testID rectangleAreaButton, is pressed', () => {
// 			const app = shallow(<App />);
// 			const button = app.find("[testID='rectangleAreaButton']");
// 			button.simulate('press');
// 			expect(app.state().area).toEqual(0);
// 		});

// 		it('should calculate the area, which is 100 when testID rectangleAreaButton, is pressed and length is 10 and width is 10', () => {
// 			const app = shallow(<App />);
// 			app.setState({
// 				length: 10,
// 				width: 10,
// 			});
// 			const button = app.find("[testID='rectangleAreaButton']");
// 			button.simulate('press');
// 			expect(app.state().area).toEqual(100);
// 		});
// 	});
// });
