// @flow
import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';

import styles from './Following.styles';

type FollowingProps = {}; // TODO: Add props type here
type FollowingState = {}; // TODO: Add state type here

class FollowingScreen extends React.PureComponent<FollowingProps, FollowingState> {
  static defaultProps: any

  constructor(props: FollowingProps) {
    super(props);
  }

  renderContent = (): ReactElement<any> => {
    return (
      <View style={styles.container}>
        <Text>Following Screen Placeholder</Text>
      </View>
    );
  }

  render() {
    const content = this.renderContent();

    return content;
  }
}

FollowingScreen.propTypes = {};

FollowingScreen.defaultProps = {};

const mapStateToProps = (state: any, ownProps: FollowingProps) => {
  return {
    // TODO: Map additional props here
  };
};

export default connect(mapStateToProps)(FollowingScreen);
