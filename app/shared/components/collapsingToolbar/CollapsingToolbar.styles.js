// @flow
import StyleSheet from 'react-native-extended-stylesheet';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  fill: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  header: {
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
    position: 'absolute',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    resizeMode: 'cover',
  },
  action: {
    left: 0,
    right: 0,
    bottom: 0,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 40,
    position: 'absolute',
    backgroundColor: 'red',
    justifyContent: 'center',
  },
  bar: {
    top: 0,
    left: 0,
    right: 0,
    height: 56,
    position: 'absolute',
    flexDirection: "row",
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
  left: {
    top: 0,
    left: 0,
    width: 50,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  right: {
    top: 0,
    right: 0,
    height: 56,
    minWidth: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Roboto_medium',
    fontSize: 25,
  },
  scrollViewContent: {
    paddingTop: 30,
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default style;
