// @flow
import React from 'react';
import {View, Text, TextInput} from 'react-native';
// import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';
 import {CollapsingToolbarComponent} from '../../../../shared/index'
 import Icon from 'react-native-vector-icons/FontAwesome';


import styles from './Home.styles';

type HomeProps = {}; // TODO: Add props type here
type HomeState = {}; // TODO: Add state type here

class HomeScreen extends React.PureComponent<HomeProps, HomeState> {
  static defaultProps: any
  

  constructor(props: HomeProps) {
    super(props);
  }

  renderText = () => {
    return (
      <View style={styles.wrapper}> 
        <Text>Home Screen Placeholder</Text>
        <Text>Home Screen Placeholder</Text>
        <Text>Home Screen Placeholder</Text>
        <Text>Home Screen Placeholder</Text>
        <Text>Home Screen Placeholder</Text>
        <Text>Home Screen Placeholder</Text>
        <Text>Home Screen Placeholder</Text>
        <Text>Home Screen Placeholder</Text>
        <Text>Home Screen Placeholder</Text>
        <Text>Home Screen Placeholder</Text>
        <Text>Home Screen Placeholder</Text>
        <Text>Home Screen Placeholder</Text>
        <Text>Home Screen Placeholder</Text>
        <Text>Home Screen Placeholder</Text>
        <Text>Home Screen Placeholder</Text>
        <Text>Home Screen Placeholder</Text>
        <Text>Home Screen Placeholder</Text>
        <Text>Home Screen Placeholder</Text>
        <Text>Home Screen Placeholder</Text>
        <Text>Home Screen Placeholder</Text>
      </View>
    );
  }

  renderHeader = () => {
    return (
      <View>
        {/* <TextInput
          style={{height: 40, width: 100, borderColor: 'gray', borderWidth: 1, alignitems: 'center'}}
        /> */}
        <Text style={styles.headingTextStyle}>Ella - Sri Lanka</Text>
      </View>
    );
  }

  renderCollapsingToolbar = () => {
    return(
      <CollapsingToolbarComponent
        leftItem={<Icon name="heart" size={30} color="#fff" />}
        rightItem={<Icon name="heart" size={30}  color="#fff" />}   
        toolbarColor='#2196f3'  
        title={this.renderHeader()}
        src={'https://facebook.github.io/react-native/docs/assets/favicon.png'}
      >
        {this.renderText()}
      </CollapsingToolbarComponent>
    );
  }

  renderContent = (): ReactElement<any> => {
    const collapsingToolbar = this.renderCollapsingToolbar();
    return (
      <View style={styles.container}>
        {collapsingToolbar}
      </View>
    );
  }

  render() {
    const content = this.renderContent();

    return content;
  }
}

HomeScreen.propTypes = {};

HomeScreen.defaultProps = {};

// const mapStateToProps = (state: any, ownProps: HomeProps) => {
//   return {
//     // TODO: Map additional props here
//   };
// };

// export default connect(mapStateToProps)(HomeScreen);

export default HomeScreen;
