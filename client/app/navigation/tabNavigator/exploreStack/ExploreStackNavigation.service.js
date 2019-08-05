// @flow
import {NavigationActions, NavigationContainer, StackActions} from 'react-navigation';

let _navigator: NavigationContainer | null = null;
type navParams = any;

const setStackNavigator = (navigatorRef: NavigationContainer): void => {
  _navigator = navigatorRef;
};

const navigate = (routeName: string, params: navParams = {}): void => {
  _navigator && _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
};

const goBack = (): void => {
  _navigator && _navigator.dispatch(NavigationActions.back());
};

const popToTop = (): void => {
  _navigator && _navigator.dispatch(StackActions.popToTop());
};

export default {
  popToTop,
  goBack,
  navigate,
  setStackNavigator,
};
