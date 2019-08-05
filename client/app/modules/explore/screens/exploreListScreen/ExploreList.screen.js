// @flow
import React from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';

import {goBack} from '../../../../navigation/tabNavigator/exploreStack/ExploreStackNavigation.actions'

import styles from './ExploreList.styles';

type ExploreListProps = {}; // TODO: Add props type here
type ExploreListState = {}; // TODO: Add state type here

class ExploreListScreen extends React.PureComponent<ExploreListProps, ExploreListState> {
  static defaultProps: any

  constructor(props: ExploreListProps) {
    super(props);
  }

  handleGoBackPress = () => {
    goBack();
  }

  renderContent = (): ReactElement<any> => {
    return (
      <View style={styles.container}>
        <Text>Explore List Screen Placeholder</Text>
        <Button title='Go Back' onPress={this.handleGoBackPress}>Explore List</Button>
      </View>
    );
  }

  render() {
    const content = this.renderContent();

    return content;
  }
}

ExploreListScreen.propTypes = {};

ExploreListScreen.defaultProps = {};

// const mapStateToProps = (state: any, ownProps: ExploreListProps) => {
//   return {
//     // TODO: Map additional props here
//   };
// };

// export default connect(mapStateToProps)(ExploreListScreen);

export default ExploreListScreen;
