// @flow
// import {Platform} from 'react-native';

import Metrics from '@propozer:theme/Metrics';
import Colors from '@propozer:theme/Colors';

// import {TopPaddingOfCurrentDevice} from '@flashmobile:services/TopNotchSupport';
// import Colors from './Colors';
// import Metrics from './Metrics';

/**
 * Europa Regular
 */
export const FontFamilyRegular = {
  fontFamily: 'Europa-Regular',
};

/**
 * Europa Light
 */
export const FontFamilyLight = {
  fontFamily: 'Europa-Light',
};

/**
 * Europa Bold
 */
export const FontFamilyBold = {
  fontFamily: 'Europa-Bold',
};

/**
 * Centered Container
 */
export const CenteredContainer = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

/**
 * Generic status bar style to be used on screens with a simple status bar
 */
export const DeviceStatusBar = {
//   paddingTop: TopPaddingOfCurrentDevice(),
};

/**
 * Rounded corner dark button base styles
 */
export const RoundedCornerDarkButton = {
  backgroundColor: Colors.backgrounds.dark,
  borderRadius: 5,
  alignItems: 'center',
  justifyContent: 'center',
};

/**
 * Rounded corner dark button text style
 */
export const RoundedCornerDarkButtonText = {
  ...FontFamilyBold,
  fontSize: Metrics.font.medium,
  color: Colors.font.white,
  textTransform: 'uppercase', // Only works on iOS it appears
};
