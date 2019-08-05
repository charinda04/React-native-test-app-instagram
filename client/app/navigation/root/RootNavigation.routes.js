// @flow
import RootScreen from '../../modules/auth/screens/rootScreen/Root.screen';
import TabNavigator from '../tabNavigator/index';




export const PRIMARY_STACK_TAB_NAVIGATOR = 'PrimaryStackTabNavigator';
export const PRIMARY_STACK_ROOT_SCREEN = 'PrimaryStackRootScreen';

export const ROUTES = {
  [PRIMARY_STACK_TAB_NAVIGATOR]: {
    screen: TabNavigator,
    path: `/${PRIMARY_STACK_TAB_NAVIGATOR}`,
  },
  [PRIMARY_STACK_ROOT_SCREEN]: {
    screen: RootScreen,
    path: `/${PRIMARY_STACK_ROOT_SCREEN}`,
  },
};