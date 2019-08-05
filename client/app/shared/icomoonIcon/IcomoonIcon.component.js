// @flow
import React from 'react';
import {View} from 'react-native';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';

import IcomoonConfig from '@flashmobile:theme/icomoon/selection.json';
import {PropStyle} from '@flashmobile:types/Props';
import type {TypeStyle} from '@flashmobile:types/Props';

const IcomoonIcon = createIconSetFromIcoMoon(IcomoonConfig);

type IcomoonIconProps = {
  color: string,
  name: string,
  size: number,
  style: TypeStyle,
};
type IcomoonIconState = {};

class IcomoonIconComponent extends React.PureComponent<IcomoonIconProps, IcomoonIconState> {
  static defaultProps: any

  constructor(props: IcomoonIconProps) {
    super(props);
  }

  renderContent = (): ReactElement<any> => {
    const {color, size, style} = this.props;
    let props = {};

    if (style) {
      props = {style};
    } else {
      props = {color, size};
    }

    return (
      <View>
        <IcomoonIcon
          {...props}
          name={this.props.name}
        />
      </View>
    );
  }

  render() {
    const content = this.renderContent();

    return content;
  }
}

IcomoonIconComponent.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  style: PropStyle,
};

IcomoonIconComponent.defaultProps = {
  color: 'black',
  size: 10,
  style: null,
};

export default IcomoonIconComponent;
