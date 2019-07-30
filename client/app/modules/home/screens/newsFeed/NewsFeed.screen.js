// @flow
import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
// import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';

import styles from './NewsFeed.styles';

type NewsFeedProps = {}; // TODO: Add props type here
type NewsFeedState = {}; // TODO: Add state type here

class NewsFeedScreen extends React.PureComponent<NewsFeedProps, NewsFeedState> {
  static defaultProps: any

  constructor(props: NewsFeedProps) {
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

NewsFeedScreen.propTypes = {};

NewsFeedScreen.defaultProps = {};

const mapStateToProps = (state: any, ownProps: NewsFeedProps) => {
  return {
    // TODO: Map additional props here
  };
};

export default connect(mapStateToProps)(NewsFeedScreen);
