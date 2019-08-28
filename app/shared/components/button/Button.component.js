// @flow
import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';

import styles from './Button.styles';

type ButtonProps = {}; // TODO: Add props type here
type ButtonState = {}; // TODO: Add state type here

class ButtonComponent extends React.PureComponent<ButtonProps, ButtonState> {
  static defaultProps: any

  constructor(props: ButtonProps) {
    super(props);
  }

  renderContent = (): ReactElement<any> => {
    return (
      <View style={styles.container}>
        <Text>test</Text>
      </View>
    );
  }

  render() {
    const content = this.renderContent();

    return content;
  }
}

ButtonComponent.propTypes = {};

ButtonComponent.defaultProps = {};

export default ButtonComponent;
