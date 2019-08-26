// @flow
import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CollapsingToolbarComponent, ListItemComponent } from '../../../../shared/index';
import styles from './Home.styles';
import type {Element as ReactElement} from 'react';



type HomeProps = {}; // TODO: Add props type here
type HomeState = {}; // TODO: Add state type here

class HomeScreen extends React.PureComponent<HomeProps, HomeState> {
  static defaultProps: any
  

  constructor(props: HomeProps) {
    super(props);
  }

  renderListItem = () => {
    return(
      <View style={styles.listItem}>
        <ListItemComponent/>
      </View>
    );
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
    const content = this.renderListItem();

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
