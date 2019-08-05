// @flow
import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';
import Memoize from 'memoize-one';

import {TabBarIconComponent} from '@flashmobile:shared/components';

import styles from './TopTabBar.styles';

type TopTabBarProps = {
  style: any,
  navigation: any,
  jumpTo: (string) => void,
  routes: {[string]: any},
};
type TopTabBarState = {};
type NavRoute = {
  key: string,
}

class TopTabBarComponent extends React.PureComponent<TopTabBarProps, TopTabBarState> {
  static defaultProps: any

  constructor(props: TopTabBarProps) {
    super(props);
  }

  renderIcon = (route: NavRoute, idx: number): ReactElement<any> => {
    const {
      navigation: {state: {index}},
      routes,
    } = this.props;
    const iconContent = this.resolveTabIconContent(route.key, routes);
    const active = index === idx;
    const containerStyle = this.resolveIconContainerStyle(active);
    const seperator = this.resolveSeperator(idx, routes);

    return (
      <View
        key={route.key}
        style={styles.wrapperStyle}
      >
        <TabBarIconComponent
          active={active}
          componentKey={route.key}
          onIconPress={this.handleIconPress}
          {...iconContent}
          {...containerStyle}
        />
        {seperator}
      </View>
    );
  }

  resolveSeperator = Memoize((index: number, routes: {[string]: any}): any => {
    let content = null;

    if (Object.keys(routes).length - 1 !== index) {
      content = <View style={styles.seperatorStyle} />;
    }

    return content;
  })

  resolveIconContainerStyle = Memoize((active: boolean): any => {
    const containerStyle = styles.containerStyle;
    const innerContainerStyle = active ? styles.activeContainerStyle : styles.containerStyle;

    return {
      'containerStyle': [containerStyle],
      'innerContainerStyle': innerContainerStyle,
    };
  })

  handleIconPress = (key: string | null): void => {
    const {
      jumpTo,
    } = this.props;

    key && jumpTo(key);
  }

  resolveTabIconContent = Memoize((key: string, routes: {[string]: any}): {[string]: any} => (
    {
      'title': routes[key].title,
      'activeTitleStyle': styles.activeTitleStyle,
      'deactiveTitleStyle': styles.deactiveTitleStyle,
    }
  ))

  renderContent = (): ReactElement<any> => {
    const {
      navigation: {state: {routes}},
    } = this.props;

    const icons = routes.map(this.renderIcon);

    return (
      <View style={[styles.container, {...this.props.style}]}>
        {icons}
      </View>
    );
  }

  render() {
    const content = this.renderContent();

    return content;
  }
}

TopTabBarComponent.propTypes = {
  style: PropTypes.object,
  navigation: PropTypes.object.isRequired,
  jumpTo: PropTypes.func.isRequired,
  routes: PropTypes.object.isRequired,
};

TopTabBarComponent.defaultProps = {
  style: {},
};

export default TopTabBarComponent;
