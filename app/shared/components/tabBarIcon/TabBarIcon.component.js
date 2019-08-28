// @flow
import React from 'react';
import {View, Text, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';

// import {IcomoonIconComponent} from '@flashmobile:shared/components';
import Icon from 'react-native-vector-icons/FontAwesome';

// import {PropStyle} from '@flashmobile:types/Props';
// import type {TypeStyle} from '@flashmobile:types/Props';
import styles from './TabBarIcon.styles';
// import Colors from '@flashmobile:theme/Colors';

type TabBarIconProps = {
  active: boolean,
  iconName: string | null, // If sent, will used as the icon and will switch between activeHighlight and deactiveHighlight
  title: string | null, // If sent null, no text will be rendered
  activeHighlight: string | null,
  deactiveHighlight: string | null,
  activeTitleStyle: {[string]: any} | null,
  deactiveTitleStyle: {[string]: any} | null,
  activeIcon: ReactElement<any> | null, // If sent, and iconName is null, will be used as active & deactive icons
  deactiveIcon: ReactElement<any> | null, // If sent along with activeIcon with those criterias, will be used for deactive icon
  notificationsAvailable: boolean,
  containerStyle:{[string]: any} | null,
  innerContainerStyle:{[string]: any} | null,
  componentKey: string | null,
  onIconPress: (string | null) => void, // If sent, will be called upon icon press
  // iconStyle: TypeStyle,
  // iconContainerStyle: TypeStyle,
  touchableFeedBack: bool,
};
type TabBarIconState = {}; // TODO: Add state type here

class TabBarIconComponent extends React.PureComponent<TabBarIconProps, TabBarIconState> {
  static defaultProps: any

  constructor(props: TabBarIconProps) {
    super(props);
  }

  renderIcon = (): ReactElement<any> | null => {
    const {active, iconName, activeIcon, deactiveIcon, activeHighlight, deactiveHighlight, iconStyle,
      iconContainerStyle} = this.props;
    let content = null;
    const color = active ? activeHighlight : deactiveHighlight;

    if (iconName) {
      const style = iconStyle || styles.iconStyle;
      content = (
        <Icon name={iconName} size={30} color="#900" style={[style, {color}]}/>
        // <IcomoonIconComponent
        //   name={iconName}
        //   style={[style, {color}]}
        // />
      );
    } else {
      if (activeIcon) {
        content = active ? activeIcon : deactiveIcon || activeIcon;
      }
    }

    if (iconContainerStyle) {
      content = (
        <View style={iconContainerStyle}>
          {content}
        </View>
      );
    }

    return content;
  }

  renderIconText = (): ReactElement<any> | null => {
    let content = null;
    const {title, active, activeTitleStyle, deactiveTitleStyle, activeHighlight, deactiveHighlight} = this.props;
    const textStyle = active ?
      activeTitleStyle ? activeTitleStyle : styles.activeTitleStyle :
      deactiveTitleStyle ? deactiveTitleStyle : styles.deactiveTitleStyle;

    const textColor = active ?
      activeHighlight ? {color: activeHighlight} : null :
      deactiveHighlight ? {color: deactiveHighlight} : null;

    if (title) {
      content = (
        <Text style={[textStyle, textColor]}>{title}</Text>
      );
    }

    return content;
  }

  renderNotifier = (): ReactElement<any> | null => {
    let content = null;

    if (this.props.notificationsAvailable) {
      content = (
        <View />
      );
    }

    return content;
  }

  handleIconPress = (): void => {
    const {onIconPress, componentKey} = this.props;
    onIconPress && onIconPress(componentKey);
  }

  renderContent = (): ReactElement<any> => {
    const icon = this.renderIcon();
    const title = this.renderIconText();
    const notifier = this.renderNotifier();

    return (
      <View style={styles.container}>
        {icon}
        {title}
        {notifier}
      </View>
    );
  }

  renderWrappedContent = (content: ReactElement<any>): ReactElement<any> => {
    // NOTE: Adding a TouchableWithoutFeedback ovverrides the inherent onpress of navigation, so not passing
    // an onIconPress means your not gonna handle it, just wrap it with a View in that case.
    const {onIconPress, containerStyle, innerContainerStyle, touchableFeedBack} = this.props;

    if (onIconPress) {
      const Touchable: any = touchableFeedBack ? TouchableOpacity : TouchableWithoutFeedback;

      return (
        <View style={containerStyle}>
          <Touchable
            onPress={this.handleIconPress}
            style={styles.innerTouchableContainerStyle}
          >
            <View style={innerContainerStyle}>
              {content}
            </View>
          </Touchable>
        </View>
      );
    } else {
      return (
        <View style={containerStyle}>
          {content}
        </View>
      );
    }
  }

  render() {
    const content = this.renderContent();
    const wrappedContent = this.renderWrappedContent(content);

    return wrappedContent;
  }
}

TabBarIconComponent.propTypes = {
  active: PropTypes.bool,
  iconName: PropTypes.string,
  title: PropTypes.string,
  activeHighlight: PropTypes.string,
  deactiveHighlight: PropTypes.string,
  activeTitleStyle: PropTypes.object,
  deactiveTitleStyle: PropTypes.object,
  activeIcon: PropTypes.node,
  deactiveIcon: PropTypes.node,
  notificationsAvailable: PropTypes.bool,
  containerStyle: PropTypes.any,
  innerContainerStyle: PropTypes.object,
  componentKey: PropTypes.string,
  onIconPress: PropTypes.func,
  // iconStyle: PropStyle,
  // iconContainerStyle: PropStyle,
  touchableFeedBack: PropTypes.bool,
};

TabBarIconComponent.defaultProps = {
  active: false,
  iconName: null,
  title: null,
  // activeHighlight: Colors.font.active,
  // deactiveHighlight: Colors.font.light,
  activeTitleStyle: null,
  deactiveTitleStyle: null,
  activeIcon: null,
  deactiveIcon: null,
  notificationsAvailable: false,
  containerStyle: null,
  innerContainerStyle: null,
  componentKey: null,
  onIconPress: null,
  iconStyle: null,
  iconContainerStyle: null,
  touchableFeedBack: false,
};

export default TabBarIconComponent;
