// @flow
import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';
import {ButtonComponent} from './shared/index';
import RootNavigationComponent from './navigation/root';
import EStyleSheet from 'react-native-extended-stylesheet';

import styles from './App.styles';

const {width, height} = Dimensions.get('window');

/**
 * Viewport width
 * @type {Number}
 */
export const viewportWidth = width;

/**
 * Viewport height
 * @type {Number}
 */
export const viewportHeight = height;

/**
 * NOTE
 *
 * Setting the font sizes through rem requires a base rem value to be defined
 * This is calculated using the device width so the font properly scales in different screen sizes
 * The division is from a magic number, adjust it so the font is proper in a screen size, and it'll scale then after
 *
 * This is solely because we have to disable font scaling in Text so the OS level font size changes don't break the UI
 * If a solution is found to disable OS level font size changes without disabling Text font scaling,
 * Remove this and replce the stylesheet imports back from react-native
 */
EStyleSheet.build({
  $rem: viewportWidth / 390,
});


type AppProps = {};
type AppState = {}; 

class AppComponent extends React.PureComponent<AppProps, AppState> {
  static defaultProps: any

  constructor(props: AppProps) {
    super(props);
  }

  renderContent = (): ReactElement<any> => {
    return (
      <View style={styles.container}>
        <RootNavigationComponent />
      </View>
    );
  }

  render() {
    const content = this.renderContent();

    return content;
  }
}

AppComponent.propTypes = {};

AppComponent.defaultProps = {};

export default AppComponent;
