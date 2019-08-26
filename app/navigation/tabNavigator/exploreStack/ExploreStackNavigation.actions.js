import ExploreStackNavigationService from './ExploreStackNavigation.service';
import {EXPLORE_FEED_STACK,EXPLORE_LIST_STACK} from './ExploreStackNavigation.routes';

type navParams = any;

export const goBack = ExploreStackNavigationService.goBack;

export const navigateToExploreFeed = (params?: navParams): void => {
  ExploreStackNavigationService.navigate(EXPLORE_FEED_STACK, params);
};

export const navigateToExploreList = (params?: navParams): void => {
  ExploreStackNavigationService.navigate(EXPLORE_LIST_STACK, params);
};