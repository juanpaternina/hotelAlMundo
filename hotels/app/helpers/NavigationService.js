import { NavigationActions, StackActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
	_navigator = navigatorRef;
}

function navigate(routeName, params) {
	_navigator.dispatch(
		NavigationActions.navigate({
			routeName,
			params,
		})
	);
}

function back(param) {
	_navigator.dispatch(NavigationActions.back(param));
}

function reset(v1, v2) {
	_navigator.dispatch(
		StackActions.reset({
			index: 1,
			actions: [ NavigationActions.navigate({ routeName: v1 }), NavigationActions.navigate({ routeName: v2 }) ],
		})
	);
}

function getRoute() {
	// console.log('routeName', _navigator.state.nav.routes.routeName);
	// console.log('routeName', _navigator.state.nav.routes);
	return _navigator.state.nav.routes;
}

//On dev not working
function replace(replacementScreen) {
	_navigator.dispatch(
		StackActions.replace({
			routeName: replacementScreen,
		})
	);
}

export default {
	navigate,
	back,
	reset,
	replace,
	getRoute,
	setTopLevelNavigator,
};
