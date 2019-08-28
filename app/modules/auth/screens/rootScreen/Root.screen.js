// @flow
import React from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';

import styles from './Root.styles';

type RootProps = {}; // TODO: Add props type here
type RootState = {}; // TODO: Add state type here

class RootScreen extends React.PureComponent<RootProps, RootState> {
  static defaultProps: any

  constructor(props: RootProps) {
    super(props);
  }
  handleNextScreenPress = () => {

  }

  renderContent = (): ReactElement<any> => {
    return (
      <View style={styles.container}>
        <Text>Root Screen Placeholder</Text>
        <Button title='Next Screen' onPress={this.handleNextScreenPress}>Next Screen</Button>
      </View>
    );
  }

  render() {
    const content = this.renderContent();

    return content;
  }
}

RootScreen.propTypes = {};

RootScreen.defaultProps = {};

// const mapStateToProps = (state: any, ownProps: RootProps) => {
//   return {
//     // TODO: Map additional props here
//   };
// };

// export default connect(mapStateToProps)(RootScreen);

export default RootScreen;
