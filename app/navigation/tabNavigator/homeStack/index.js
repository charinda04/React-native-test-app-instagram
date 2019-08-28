// @flow
import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from '../../../modules/home/screens/homeScreen/Home.screen';

import {TabBarIconComponent} from '@instagram:shared/components';

import Icon from 'react-native-vector-icons/FontAwesome';

// import styles from './ExploreTabNavigation.styles';
import {ROUTES, HOME_FEED_TAB} from './HomeTabNavigation.routes';

type HomeTabNavigationProps = {};
type HomeTabNavigationState = {};

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
  // initialRouteName: HOME_FEED_TAB,
  headerMode: 'none',
  // navigationOptions: {
  //   gesturesEnabled: false,
  //   // tabBarComponent: _renderTabBar,
  // },
};

export const HomeTabNavigation = createStackNavigator(ROUTES, NAV_CONFIG);

class HomeTabNavigationComponent extends React.PureComponent<
  HomeTabNavigationProps,
  HomeTabNavigationState
> {
  static defaultProps: any;
  static navigationOptions: any = ({navigation}) => ({
    tabBarIcon: ({focused}) => {
      const title = 'Explore';
      const iconName = 'restaurant';

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

  constructor(props: HomeTabNavigationProps) {
    super(props);
  }

  renderContent = (): ReactElement<any> => {
    return <HomeTabNavigation />;
  };

  render() {
    const content = this.renderContent();

    return content;
  }
}

HomeTabNavigationComponent.propTypes = {};

HomeTabNavigationComponent.defaultProps = {};

export default HomeTabNavigation;
