import ProfileStackNavigationService from './ProfileStackNavigation.service';
import {PROFILE_LIST_STACK,PROFILE_STACK} from './ProfileStackNavigation.routes';

type navParams = any;

export const goBack = ProfileStackNavigationService.goBack;

export const navigateToProfileFeed = (params?: navParams): void => {
  ProfileStackNavigationService.navigate(PROFILE_STACK, params);
};

export const navigateToProfileList = (params?: navParams): void => {
  ProfileStackNavigationService.navigate(PROFILE_LIST_STACK, params);
};