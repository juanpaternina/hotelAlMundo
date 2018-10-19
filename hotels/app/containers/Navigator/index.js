import { createStackNavigator } from 'react-navigation';

console.disableYellowBox = true;

import HomeScreen from '../../containers/Home';
import DetailScreen from '../../containers/Detail';

export default createStackNavigator(
	{
		HomeScreen,
		DetailScreen,
	},
	{
		initialRouteName: 'HomeScreen',
		navigationOptions: {
			headerStyle: {
				backgroundColor: 'white',
				shadowColor: 'transparent',
				elevation: 0,
				borderBottomWidth: 0,
			},
			// headerTintColor: Color.darkGray,
		},
	},
);
