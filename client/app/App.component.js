// @flow
import React, { Fragment }  from 'react';
import {View,SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";
import { Avatar, Badge, Icon, withBadge, Button } from 'react-native-elements';


import styles from './App.styles';

type AppProps = {}; // TODO: Add props type here
type AppState = {}; // TODO: Add state type here

class AppComponent extends React.PureComponent<AppProps, AppState> {
  static defaultProps: any

  constructor(props: AppProps) {
    super(props);
  }

  renderDefaultView = (): ReactElement<any> => {
    return(
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}
          >
            <Header />
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View>
            
          </View>
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Step One</Text>
                <Text style={styles.sectionDescription}>
                  Edit <Text style={styles.highlight}>App.js</Text> to change this
                  screen and then come back to see your edits.
                </Text>
                <Button 
                  title="Solid Button"
                />
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>See Your Changes</Text>
                <Text style={styles.sectionDescription}>
                  <ReloadInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Debug</Text>
                <Text style={styles.sectionDescription}>
                  <DebugInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Learn More</Text>
                <Text style={styles.sectionDescription}>
                  Read the docs to discover what to do next:
                </Text>
              </View>
              <LearnMoreLinks />
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }

  renderTestView = (): ReactElement<any> => {
    return(
      <View>
        <Badge value="99+" status="error" />
        <Badge value={<Text>My Custom Badge</Text>} />
        <Button 
          title="test button"
          // buttonStyle={styles.buttonWrapper}
          containerStyle={styles.buttonContainer}
          // loading
        />
      </View>
    );
  }

  renderContent = (): ReactElement<any> => {
    const defaultView = this.renderDefaultView();
    const testView = this.renderTestView();

    return (
      <View style={styles.container}>
        {testView}
      </View>
    );
  }

  render() {
    const content = this.renderContent();

    return content;
  }
}

AppComponent.propTypes = {};

AppComponent.defaultProps = {};

export default AppComponent;
