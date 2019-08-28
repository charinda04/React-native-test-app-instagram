import HomeStack from './homeStack/index';
import ExploreStack from './exploreStack/index';
import ProfileStack from './profileStack/index';

export const PRIMARY_TAB_NAV_HOME_FEED = 'Home';
export const PRIMARY_TAB_NAV_EXPLORE_FEED = 'Explore';
export const PRIMARY_TAB_NAV_PROFILE_FEED = 'Profile';

export const ROUTES = {
  [PRIMARY_TAB_NAV_HOME_FEED]: {
    screen: HomeStack,
    path: `/${PRIMARY_TAB_NAV_HOME_FEED}`,
  },
  [PRIMARY_TAB_NAV_EXPLORE_FEED]: {
    screen: ExploreStack,
    path: `/${PRIMARY_TAB_NAV_EXPLORE_FEED}`,
  },
  [PRIMARY_TAB_NAV_PROFILE_FEED]: {
    screen: ProfileStack,
    path: `/${PRIMARY_TAB_NAV_PROFILE_FEED}`,
  },
};
