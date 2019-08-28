import ProfileScreen from '@instagram:modules/profile/screens/profileScreen/Profile.screen';
import ProfileListScreen from '@instagram:modules/profile/screens/profileListScreen/ProfileList.screen';

export const PROFILE_STACK = 'ProfileFeed';
export const PROFILE_LIST_STACK = 'ProfileListFeed';

export const ROUTES = {
  [PROFILE_STACK]: {
    screen: ProfileScreen,
    path: `/${PROFILE_STACK}`,
    // title: 'Profile',
  },
  [PROFILE_LIST_STACK]: {
    screen: ProfileListScreen,
    path: `/${PROFILE_LIST_STACK}`,
    // title: 'List',
  },
};
