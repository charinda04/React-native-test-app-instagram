// @flow
import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import ExploreStackNavigationService from './ExploreStackNavigation.service';
import {TabBarIconComponent} from '@instagram:shared/components';

import Icon from 'react-native-vector-icons/FontAwesome';

// import styles from './ExploreTabNavigation.styles';
import {
  ROUTES,
  EXPLORE_FEED_STACK,
  EXPLORE_LIST_STACK,
} from './ExploreStackNavigation.routes';

type ExploreTabNavigationProps = {};
type ExploreTabNavigationState = {};

const _renderTabBar = (props: any) => (
  // <TopTabBarComponent
  //   {...(props || {})}
  //   routes={ROUTES}
  // />
  <Icon name="rocket"
size={30}
color="#900" />
);

// Navigation configurations
// See https://reactnavigation.org/docs/en/bottom-tab-navigator.html#routeconfigs
const NAV_CONFIG = {
  initialRouteName: EXPLORE_FEED_STACK,
  headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: false,
    // tabBarComponent: _renderTabBar,
  },
};

export const ExploreTabNavigation = createAppContainer(
  createStackNavigator(ROUTES, NAV_CONFIG)
);

class ExploreTabNavigationComponent extends React.PureComponent<
  ExploreTabNavigationProps,
  ExploreTabNavigationState
> {
  static defaultProps: any;
  static navigationOptions: any = ({navigation}) => ({
    tabBarIcon: ({focused}) => {
      const title = 'Explore';
      const iconName = 'heart';

      return (
        <TabBarIconComponent
          active={focused}
          // iconContainerStyle={styles.tabIconStyle}
          iconName={iconName}
          title={title}
        />
      );
    },
  });

  constructor(props: ExploreTabNavigationProps) {
    super(props);
  }

  handleRef = (navigatorRef: NavigationContainer): void => {
    this._navigatorRef = navigatorRef;
    ExploreStackNavigationService.setStackNavigator(navigatorRef);
  };

  renderContent = (): ReactElement<any> => {
    return <ExploreTabNavigation ref={this.handleRef} />;
  };

  render() {
    const content = this.renderContent();

    return content;
  }
}

ExploreTabNavigationComponent.propTypes = {};

ExploreTabNavigationComponent.defaultProps = {};

export default ExploreTabNavigationComponent;
