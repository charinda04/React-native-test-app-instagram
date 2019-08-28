// @flow
import StyleSheet from 'react-native-extended-stylesheet';
import {PixelRatio} from 'react-native';

import {viewportWidth, calculateMetric} from '@flashmobile:theme/Metrics';
import {FontFamilyBold} from '@flashmobile:theme/Base';
import Colors from '@flashmobile:theme/Colors';
import Metrics from '@flashmobile:theme/Metrics';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: calculateMetric(48),
    width: viewportWidth,
    backgroundColor: Colors.white,
  },
  containerStyle: {
    flex: 1,
  },
  activeContainerStyle: {
    flex: viewportWidth,
    borderBottomWidth: 1 / PixelRatio.get() * 3,
    marginHorizontal: calculateMetric(16),
    borderColor: Colors.colorPalette.primary,
  },
  seperatorStyle: {
    height: calculateMetric(16),
    width: 1 / PixelRatio.get(),
    backgroundColor: Colors.backgrounds.lightGray,
  },
  wrapperStyle: {
    flex: viewportWidth,
    flexDirection: 'row',
    alignItems: 'center',
  },
  activeTitleStyle: {
    ...FontFamilyBold,
    color: Colors.font.active,
    fontSize: Metrics.font.medium,
  },
  deactiveTitleStyle: {
    ...FontFamilyBold,
    color: Colors.font.light,
    fontSize: Metrics.font.medium,
  },
});

export default style;
