// @flow
import React from 'react';
import {View, Text, Button} from 'react-native';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';
import { createAppContainer, createStackNavigator} from 'react-navigation';

import {ROUTES, PRIMARY_STACK_TAB_NAVIGATOR, PRIMARY_STACK_ROOT_SCREEN} from './RootNavigation.routes';

// import styles from './RootNavigation.styles';

// Navigation configurations
// See https://reactnavigation.org/docs/en/bottom-tab-navigator.html#routeconfigs
const NAV_CONFIG = {
  initialRouteName: PRIMARY_STACK_TAB_NAVIGATOR,
  headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: false,
  },
};


type RootNavigationProps = {}; // TODO: Add props type here
type RootNavigationState = {}; // TODO: Add state type here

export const RootNavigation = createAppContainer(createStackNavigator(ROUTES, NAV_CONFIG));

class RootNavigationComponent extends React.PureComponent<RootNavigationProps, RootNavigationState> {
  static defaultProps: any

  constructor(props: RootNavigationProps) {
    super(props);
  }

  renderContent = (): ReactElement<any> => {
    return (
      <RootNavigation />
    );
  }

  render() {
    const content = this.renderContent();

    return content;
  }
}

RootNavigationComponent.propTypes = {};

RootNavigationComponent.defaultProps = {};

export default (RootNavigationComponent);

// import {
//   createBottomTabNavigator,
//   createStackNavigator,
//   createAppContainer,
// } from 'react-navigation';

// class DetailsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Details!</Text>
//       </View>
//     );
//   }
// }

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         {/* other code from before here */}
//         <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate('Details')}
//         />
//       </View>
//     );
//   }
// }

// class SettingsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         {/* other code from before here */}
//         <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate('Details')}
//         />
//       </View>
//     );
//   }
// }

// const HomeStack = createStackNavigator({
//   Home: HomeScreen,
//   Details: DetailsScreen,
// });

// const SettingsStack = createStackNavigator({
//   Settings: SettingsScreen,
//   Details: DetailsScreen,
// });

// export default createAppContainer(createBottomTabNavigator(
//   {
//     Home: HomeStack,
//     Settings: SettingsStack,
//   },
//   {
//     /* Other configuration remains unchanged */
//   }
// ));