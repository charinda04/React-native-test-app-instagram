// @flow
import React from 'react';
import {Animated,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';

import styles from './CollapsingToolbar.styles';

type CollapsingToolbarProps = {

};
type CollapsingToolbarState = {}; // TODO: Add state type here

class CollapsingToolbarComponent extends React.PureComponent<CollapsingToolbarProps, CollapsingToolbarState> {
  static defaultProps: any

  constructor(props: CollapsingToolbarProps) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0),
    };
  }

  renderContent = (): ReactElement<any> => {
     const { children,src,leftItem,leftItemPress,rightItem,rightItemPress,title,titleColor,toolbarColor,toolbarMaxHeight,toolbarMinHeight } = this.props;
    const scrollDistance = toolbarMaxHeight - toolbarMinHeight;
    const headerTranslate = this.state.scrollY.interpolate({
      inputRange: [0, scrollDistance],
      outputRange: [0, -scrollDistance],
      extrapolate: 'clamp',
    });

    const imageOpacity = this.state.scrollY.interpolate({
      inputRange: [0, scrollDistance / 2, scrollDistance],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });
    const imageTranslate = this.state.scrollY.interpolate({
      inputRange: [0, scrollDistance],
      outputRange: [0, 100],
      extrapolate: 'clamp',
    });

    const titleScale = this.state.scrollY.interpolate({
      inputRange: [0, scrollDistance / 2, scrollDistance],
      // outputRange: [1, 1, 0.8],
      outputRange: [1, 1, 1],
      extrapolate: 'clamp',
    });
    const titleTranslate = this.state.scrollY.interpolate({
      inputRange: [0, scrollDistance / 2, scrollDistance],
      outputRange: [0, 0, -8],
      extrapolate: 'clamp',
    });

    let titleHeader = null;
    if (typeof title == 'string' || title instanceof String) {
      titleHeader = <Text style={[styles.title,{color: titleColor}]}>{title}</Text>;
        // <Text style={this.titleStyles}>{title.toUpperCase()}</Text>;
        
    } else {
      titleHeader = title;
    }

    return (
      <View style={styles.fill}>
        
        <Animated.ScrollView
          style={styles.fill}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            { useNativeDriver: true },
          )}>
          <View style={{marginTop: toolbarMaxHeight, minHeight: 700}}>
            {children}
          </View>
        </Animated.ScrollView>
        <Animated.View
          style={[
            styles.header,
            { 
              backgroundColor: toolbarColor,
              height: toolbarMaxHeight,
              transform: [{ translateY: headerTranslate }] 
            },
          ]}
        >
          <Animated.Image
            style={[
              styles.backgroundImage,
              {
                height: toolbarMaxHeight,
                opacity: imageOpacity,
                transform: [{ translateY: imageTranslate }],
              },
            ]}
            source={{uri: `${src}`}}
          />
          <Animated.View
            style={[
              styles.action,
              {
                backgroundColor: 'transparent',
                transform: [
                  { scale: titleScale },
                ],
              },
            ]}
          >
            {titleHeader}
          </Animated.View>
        </Animated.View>
        <Animated.View style={styles.bar}>
          <TouchableOpacity onPress={leftItemPress}>
            <View style={styles.left}>{leftItem}</View>
          </TouchableOpacity>
          <TouchableOpacity onPress={rightItemPress}>
            <View style={styles.right}>{rightItem}</View>
          </TouchableOpacity>
        </Animated.View>

      </View>
    );
  }

  render() {
    const content = this.renderContent();

    return content;
  }
}

CollapsingToolbarComponent.propTypes = {
  children: PropTypes.node.isRequired,
  src: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
  titleColor: PropTypes.string,
  leftItem: PropTypes.element,
  leftItemPress: PropTypes.func,
  rightItem: PropTypes.element,
  rightItemPress: PropTypes.func,
  toolbarColor: PropTypes.string,
  toolbarMaxHeight: PropTypes.number,
  toolbarMinHeight: PropTypes.number,
};

CollapsingToolbarComponent.defaultProps = {
  leftItem: null,
  leftItemPress: null,
  rightItem: null,
  rightItemPress: null,
  title: 'Home',
  titleColor: '#fff',
  toolbarColor: '#e91e63',
  toolbarMaxHeight: 300,
  toolbarMinHeight: 55,
};

export default CollapsingToolbarComponent;
