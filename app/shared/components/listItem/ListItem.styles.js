// @flow
import StyleSheet from 'react-native-extended-stylesheet';

const style = StyleSheet.create({
  container: {
    // flex: 1,
  },

  headerContainer: {
    flexDirection: 'row',
    backgroundColor: 'red',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    alignItems: 'center',
  },

  headerLeftContainer: {
    flexDirection: 'row',
  },

  nameContainer: {
    paddingLeft: 10,
  },

  imageContainer: {
    backgroundColor: 'green',
  },

  imageFooterContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },

  FooterContainer: {
    backgroundColor: 'yellow',
  },
});

export default style;
