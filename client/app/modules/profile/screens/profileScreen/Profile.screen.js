// @flow
import React from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';
// import CollapsingToolbar from 'react-native-collapsingtoolbar';
 import Icon from 'react-native-vector-icons/Ionicons';
 import {ViewMoreTextComponent} from '../../../../shared/index'

import {navigateToProfileList} from '../../../../navigation/tabNavigator/profileStack/ProfileStackNavigationActions'

import styles from './Profile.styles';

type ProfileProps = {}; // TODO: Add props type here
type ProfileState = {}; // TODO: Add state type here

class ProfileScreen extends React.PureComponent<ProfileProps, ProfileState> {
  static defaultProps: any

  constructor(props: ProfileProps) {
    super(props);
  }

  handleProfileListPress = () => {
    navigateToProfileList();
  }

  renderCollapsingToolbar = () => {
    return (
    //   <CollapsingToolbar 
    //     leftItem={<Icon name="md-menu" size={30} color="#fff" />}
    //     rightItem={<Icon name="md-create" size={30}  color="#fff" />}   
    //     toolbarColor='#2196f3'  
    //     title='Demo Toolbar'
    //     src='https://lorempixel.com/400/300/'
    //     >
    //     <Text>
    //         Create             
    //     </Text>
    // </CollapsingToolbar>
    <View></View>
    );
  }

  renderContent = (): ReactElement<any> => {
    return (
      <View style={styles.container}>
        <Text>Profile Screen Placeholder</Text>
        <Button title='Profile List' onPress={this.handleProfileListPress}>Profile List</Button>
        <ViewMoreTextComponent
          numberOfLines={4}
          renderViewMore={this.renderViewMore}
          renderViewLess={this.renderViewLess}
          textStyle={{textAlign: 'left'}}
        >
          <Text>
            Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu.
            Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne,
            ea ipsum antiopam definitionem eos.
            Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu.
            Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne,
            ea ipsum antiopam definitionem eos.
            Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu.
            Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne,
            ea ipsum antiopam definitionem eos.
            Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu.
            Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne,
            ea ipsum antiopam definitionem eos.
            Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu.
            Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne,
            ea ipsum antiopam definitionem eos.
          </Text>
        </ViewMoreTextComponent>
      </View>
    );
  }

  render() {
    const content = this.renderContent();

    return content;
  }
}

ProfileScreen.propTypes = {};

ProfileScreen.defaultProps = {};

// const mapStateToProps = (state: any, ownProps: ProfileProps) => {
//   return {
//     // TODO: Map additional props here
//   };
// };

// export default connect(mapStateToProps)(ProfileScreen);

export default ProfileScreen;
