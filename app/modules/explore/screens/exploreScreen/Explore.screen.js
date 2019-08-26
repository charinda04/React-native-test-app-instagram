// @flow
import React from 'react';
import {View, Text, Button, Platform} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';
import ViewMoreText from 'react-native-view-more-text';
import CollapsibleToolbar from 'react-native-collapsible-toolbar';


import {navigateToExploreList} from '../../../../navigation/tabNavigator/exploreStack/ExploreStackNavigation.actions'

import styles from './Explore.styles';

type ExploreProps = {}; // TODO: Add props type here
type ExploreState = {}; // TODO: Add state type here

class ExploreScreen extends React.PureComponent<ExploreProps, ExploreState> {
  static defaultProps: any

  constructor(props: ExploreProps) {
    super(props);
  }

  handleExploreListPress = () => {
    navigateToExploreList();
  }

  renderViewMore = (onPress) => {
      return(
        <Text onPress={onPress}>View more</Text>
      )
    }

    renderViewLess = (onPress) => {
      return(
        <Text onPress={onPress}>View less</Text>
      )
    }

    renderNavBar = () => {
      return (
        <View>
        <Text>Explore Screen Placeholder</Text>
        </View>
      );
    }

    renderCollapsibleToolBar = () => {
      return (
        <CollapsibleToolbar
    renderContent={this.renderContent}
    renderNavBar={this.renderNavBar}
    // renderToolBar={this.renderToolBar}
    imageSource='https://lorempixel.com/400/300/'
    collapsedNavBarBackgroundColor='#009688'
    translucentStatusBar={Platform.Version >= 21}
    toolBarHeight={300}
/>
      );
    }

  renderContent = (): ReactElement<any> => {
    return (
      <View 
      style={styles.container}
      
      >
        <Text>Explore Screen Placeholder</Text>
        <Button title='Explore List' onPress={this.handleExploreListPress}>Explore List</Button>
        <View style={styles.viewMoreContainer}>
        {/* <ViewMoreText
          numberOfLines={2}
          renderViewMore={this.renderViewMore}
          renderViewLess={this.renderViewLess}
          textStyle={{textAlign: 'left'}}
        >
          <Text>
            Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.
          </Text>
        </ViewMoreText> */}


        


        <Text>Explore Screen Placeholder</Text>
        <Text>Explore Screen Placeholder</Text>
        <Text>Explore Screen Placeholder</Text>
        <Text>Explore Screen Placeholder</Text>
        <Text>Explore Screen Placeholder</Text>
        <Text>Explore Screen Placeholder</Text>
        <Text>Explore Screen Placeholder</Text>
        <Text>Explore Screen Placeholder</Text>
        <Text>Explore Screen Placeholder</Text>
        <Text>Explore Screen Placeholder</Text>
        <Text>Explore Screen Placeholder</Text>
        <Text>Explore Screen Placeholder</Text>
        <Text>Explore Screen Placeholder</Text>
        <Text>Explore Screen Placeholder</Text>
        <Text>Explore Screen Placeholder</Text>
        <Text>Explore Screen Placeholder</Text>
        <Text>Explore Screen Placeholder</Text>
        <Text>Explore Screen Placeholder</Text>
        <Text>Explore Screen Placeholder</Text>
        <Text>Explore Screen Placeholder</Text>
        <Text>Explore Screen Placeholder</Text>
        <Text>Explore Screen Placeholder</Text>
        <Text>Explore Screen Placeholder</Text>
        <Text>Explore Screen Placeholder</Text>
        <Text>Explore Screen Placeholder</Text>
        <Text>Explore Screen Placeholder</Text>
        <Text>Explore Screen Placeholder</Text>
        <Text>Explore Screen Placeholder</Text>
        <Text>Explore Screen Placeholder</Text>
        <Text>Explore Screen Placeholder</Text>
        <Text>Explore Screen Placeholder</Text>
        <Text>Explore Screen Placeholder</Text>
        </View>
      </View>
    );
  }

  render() {
    const content = this.renderCollapsibleToolBar();

    return content;
  }
}

ExploreScreen.propTypes = {};

ExploreScreen.defaultProps = {};

// const mapStateToProps = (state: any, ownProps: ExploreProps) => {
//   return {
//     // TODO: Map additional props here
//   };
// };

// export default connect(mapStateToProps)(ExploreScreen);

export default ExploreScreen;
