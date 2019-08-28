import ExploreFeedScreen from '@instagram:modules/explore/screens/exploreScreen/Explore.screen';
import ExploreListScreen from '@instagram:modules/explore/screens/exploreListScreen/ExploreList.screen';

export const EXPLORE_FEED_STACK = 'ExploreFeed';
export const EXPLORE_LIST_STACK = 'ExploreList';

export const ROUTES = {
  [EXPLORE_FEED_STACK]: {
    screen: ExploreFeedScreen,
    path: `/${EXPLORE_FEED_STACK}`,
    title: 'ExploreFeed',
  },
  [EXPLORE_LIST_STACK]: {
    screen: ExploreListScreen,
    path: `/${EXPLORE_LIST_STACK}`,
    title: 'ExploreList',
  },
};
