// @flow
import React from 'react';
import {View, Text, Animated} from 'react-native';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';
import Collapsible from 'react-native-collapsible';

import styles from './ViewMoreText.styles';

type ViewMoreTextProps = {};
type ViewMoreTextState = {}; 

class ViewMoreTextComponent extends React.PureComponent<ViewMoreTextProps, ViewMoreTextState> {
  static defaultProps: any

  constructor(props: ViewMoreTextProps) {
    super(props);
  }

  _trimmedTextHeight = null;
  _fullTextHeight = null;
  _shouldShowMore = false;

  state = {
    isFulltextShown: true,
    numberOfLines: this.props.numberOfLines,
    heightAnim: this._fullTextHeight,
  }

  hideFullText = () => {
    if (
      this.state.isFulltextShown &&
      this._trimmedTextHeight &&
      this._fullTextHeight
    ) {
      this._shouldShowMore = this._trimmedTextHeight < this._fullTextHeight;
      this.setState({
        isFulltextShown: false,
      });
    }
  }

  onLayoutTrimmedText = (event) => {
    const {
      height,
    } = event.nativeEvent.layout;

    this._trimmedTextHeight = height;
    this.hideFullText();
  }

  onLayoutFullText = (event) => {
    const {
      height,
    } = event.nativeEvent.layout;

    this._fullTextHeight = height;
    this.hideFullText();
  }

  onPressMore = () => {
    this.setState({
      numberOfLines: null,
    }, () => {
      this.props.afterExpand();
    });
  }

  onPressLess = () => {
    this.setState({
      numberOfLines: this.props.numberOfLines,
    }, () => {
      this.props.afterCollapse();
    });
  }

  getWrapperStyle = () => {
    if (this.state.isFulltextShown) {
      return styles.transparent;
    }
    return {};
  }

  changeLayoutHeightAnimation = () => {
    Animated.timing(this.state.heightAnim, {
      toValue: (this.state.isVisible) ? calculateMetric(this.state.secondaryLayoutHeight) : calculateMetric(110),
      duration: 300,
      useNativeDriver: false,
    }).start();
  }

  renderViewMore = () => (
    <Text
      style={styles.viewMoreText}
      onPress={this.onPressMore}
    >
      View More
    </Text>
  )

  renderViewLess = () => (
    <Text
      style={styles.viewMoreText}
      onPress={this.onPressLess}
    >
      View Less
    </Text>
  )

  renderFooter = () => {
    const {
      numberOfLines,
    } = this.state;

    if (this._shouldShowMore === true) {
      if (numberOfLines > 0) {
        return (this.props.renderViewMore || this.renderViewMore)(this.onPressMore);
      }
      return (this.props.renderViewLess || this.renderViewLess)(this.onPressLess);
    }
    return null;
  }

  renderFullText = () => {
    if (this.state.isFulltextShown) {
      return (
        <View onLayout={this.onLayoutFullText} style={styles.fullTextWrapper}>
          <Text style={this.props.textStyle}>{this.props.children}</Text>
        </View>
      );
    }
    return null;
  }

  renderContent = (): ReactElement<any> => {
    return (
      // <Collapsible
			// 	collapsedHeight={2}
			// 	collapsed
			// >
        <Animated.View style={[this.getWrapperStyle(), {height: this.state.heightAnim}]}>
            <View onLayout={this.onLayoutTrimmedText}>
            <Text
                style={this.props.textStyle}
                numberOfLines={this.state.numberOfLines}
            >
                {this.props.children}
                
            </Text>
            {this.renderFooter()}
            
            </View>

            {this.renderFullText()}
        </Animated.View>
      // </Collapsible>
    );
  }

  render() {
    const content = this.renderContent();

    return content;
  }
}

ViewMoreTextComponent.propTypes = {
    renderViewMore: PropTypes.func,
  renderViewLess: PropTypes.func,
  afterCollapse: PropTypes.func,
  afterExpand: PropTypes.func,
  numberOfLines: PropTypes.number.isRequired,
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

ViewMoreTextComponent.defaultProps = {
    afterCollapse: () => {},
  afterExpand: () => {},
  textStyle: {},
};

export default ViewMoreTextComponent;
