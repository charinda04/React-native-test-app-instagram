// @flow
import React from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';

import {goBack} from '../../../../navigation/tabNavigator/profileStack/ProfileStackNavigationActions'

import styles from './ProfileList.styles';

type ProfileListProps = {}; // TODO: Add props type here
type ProfileListState = {}; // TODO: Add state type here

class ProfileListScreen extends React.PureComponent<ProfileListProps, ProfileListState> {
  static defaultProps: any

  constructor(props: ProfileListProps) {
    super(props);
  }

  handleGoBackPress = () => {
    goBack();
  }

  renderContent = (): ReactElement<any> => {
    return (
      <View style={styles.container}>
        <Text>Profile List Screen Placeholder</Text>
        <Button title='Go Back' onPress={this.handleGoBackPress}>Go Back</Button>
      </View>
    );
  }

  render() {
    const content = this.renderContent();

    return content;
  }
}

ProfileListScreen.propTypes = {};

ProfileListScreen.defaultProps = {};

// const mapStateToProps = (state: any, ownProps: ProfileListProps) => {
//   return {
//     // TODO: Map additional props here
//   };
// };

// export default connect(mapStateToProps)(ProfileListScreen);

export default ProfileListScreen;