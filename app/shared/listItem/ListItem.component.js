// @flow
import React from 'react';
import {Text, View} from 'react-native';
import styles from './ListItem.styles';
import type {Element as ReactElement} from 'react';

type ListItemProps = {}; // TODO: Add props type here
type ListItemState = {}; // TODO: Add state type here

class ListItemComponent extends React.PureComponent<ListItemProps, ListItemState> {
  static defaultProps: any;

  constructor(props: ListItemProps) {
    super(props);
  }

  renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.headerLeftContainer}>
          <View>
            <Text>avatar</Text>
          </View>
          <View style={styles.nameContainer}>
            <Text>name</Text>
            <Text>location</Text>
          </View>
        </View>
        <View style={styles.headerRightContainer}>
          <Text>options</Text>
        </View>
      </View>
    );
  }

  renderImageContent = () => {
    return (
      <View style={styles.imageContainer}>
        <View>

          <Text>image</Text>
        </View>
        <View style={styles.imageFooterContainer}>
          <View>
            <Text>heart</Text>
            <Text>comment</Text>

          </View>
          <Text>favourite</Text>

        </View>
      </View>
    );
  }

  renderFooter = () => {
    return (
      <View style={styles.FooterContainer}>
        <Text>footer</Text>

      </View>
    );
  }

  renderContent = (): ReactElement<any> => {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {this.renderImageContent()}
        {this.renderFooter()}
      </View>
    );
  };

  render() {
    const content = this.renderContent();

    return content;
  }
}

ListItemComponent.propTypes = {};

ListItemComponent.defaultProps = {};

export default ListItemComponent;
