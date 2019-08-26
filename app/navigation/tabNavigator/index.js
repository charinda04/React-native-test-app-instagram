// @flow
import React from 'react';
import {View, Text, Button} from 'react-native';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';
import { createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation';

import {ROUTES, PRIMARY_TAB_NAV_HOME_FEED} from './TabNavigation.routes';

// import styles from './TabNavigation.styles';

// Navigation configurations
// See https://reactnavigation.org/docs/en/bottom-tab-navigator.html#routeconfigs
const NAV_CONFIG = {
  initialRouteName: PRIMARY_TAB_NAV_HOME_FEED,
  allowFontScaling: false,
  tabBarOptions: {
    activeTintColor: '#e91e63',
    inactiveTintColor: '#586589',
  labelStyle: {
    fontSize: 12,
  },
    style: {
      height: (56),
      // backgroundColor: '#171F33'
    },
    showLabel: false,
  }
  
};


type TabNavigationProps = {};
type TabNavigationState = {};

export const TabNavigation = (createBottomTabNavigator(ROUTES, NAV_CONFIG));

class TabNavigationComponent extends React.PureComponent<TabNavigationProps, TabNavigationState> {
  static defaultProps: any
  static navigationOptions: any = ({navigation}) => ({
    tabBarIcon: ({focused}) => {
      const title = 'test';
      const iconName = 'restaurant';

      return (
        <Icon name="rocket" size={30} color="#900" />
      );
    },
  })

  constructor(props: TabNavigationProps) {
    super(props);
  }

  renderContent = (): ReactElement<any> => {
    return (
      <TabNavigation />
    );
  }

  render() {
    const content = this.renderContent();

    return content;
  }
}

TabNavigationComponent.propTypes = {};

TabNavigationComponent.defaultProps = {};

export default (TabNavigation);