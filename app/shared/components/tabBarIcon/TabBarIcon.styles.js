// @flow
import StyleSheet from 'react-native-extended-stylesheet';

// import Colors from '@flashmobile:theme/Colors';
// import Metrics from '@flashmobile:theme/Metrics';
// import {FontFamilyBold} from '@flashmobile:theme/Base';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTitleStyle: {
    // ...FontFamilyBold,
    // color: Colors.font.active,
    // fontSize: Metrics.font.tiny,
  },
  deactiveTitleStyle: {
    // ...FontFamilyBold,
    // color: Colors.font.light,
    // fontSize: Metrics.font.tiny,
  },
  iconStyle: {
    // fontSize: '25rem',
    fontSize: 25,
  },
  innerTouchableContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});

export default style;
