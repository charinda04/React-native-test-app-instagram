import HomeScreen from '@instagram:modules/home/screens/homeScreen/Home.screen';

export const HOME_FEED_TAB = 'HomeFeed';

export const ROUTES = {
  [HOME_FEED_TAB]: {
    screen: HomeScreen,
    path: `/${HOME_FEED_TAB}`,
    title: 'Home',
  },
};
