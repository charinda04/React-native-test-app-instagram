// @flow
import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import type { Element as ReactElement } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ProfileStackNavigationService from './ProfileStackNavigation.service';
import { TabBarIconComponent } from '@instagram:shared/components';

import Icon from 'react-native-vector-icons/FontAwesome';

// import styles from './ProfileStackNavigation.styles';
import {
  ROUTES,
  PROFILE_STACK,
  PROFILE_LIST_STACK
} from './ProfileStackNavigation.routes';

type ProfileStackNavigationProps = {};
type ProfileStackNavigationState = {};

const _renderTabBar = (props: any) => (
  // <TopTabBarComponent
  //   {...(props || {})}
  //   routes={ROUTES}
  // />
  <Icon name="rocket" size={30} color="#900" />
);

// Navigation configurations
// See https://reactnavigation.org/docs/en/bottom-tab-navigator.html#routeconfigs
const NAV_CONFIG = {
  initialRouteName: PROFILE_STACK,
  headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: false
    // tabBarComponent: _renderTabBar,
  }
};

export const ProfileStackNavigation = createAppContainer(
  createStackNavigator(ROUTES, NAV_CONFIG)
);

const tabIconStyle = {
  height: 30,
  alignItems: 'center',
  justifyContent: 'center'
};

class ProfileStackNavigationComponent extends React.PureComponent<
  ProfileStackNavigationProps,
  ProfileStackNavigationState
> {
  static defaultProps: any;
  static navigationOptions: any = ({ navigation }) => ({
    tabBarIcon: ({ focused }) => {
      const title = 'Profile';
      const iconName = 'pencil';

      return <Icon name={iconName} size={30} color="#900" />;
    }
  });

  constructor(props: ProfileStackNavigationProps) {
    super(props);
  }

  handleRef = (navigatorRef: NavigationContainer): void => {
    this._navigatorRef = navigatorRef;
    ProfileStackNavigationService.setStackNavigator(navigatorRef);
  };

  renderContent = (): ReactElement<any> => {
    return <ProfileStackNavigation ref={this.handleRef} />;
  };

  render() {
    const content = this.renderContent();

    return content;
  }
}

ProfileStackNavigationComponent.propTypes = {};

ProfileStackNavigationComponent.defaultProps = {};

export default ProfileStackNavigationComponent;
