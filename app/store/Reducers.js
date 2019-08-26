// @flow
import {combineReducers} from 'redux';
// import AllSharedReducers from 'ancon-flash-lib/src/reducers';

import navigationReducer from '@flashmobile:navigation/reducer';

export default combineReducers({
  // Spreading all shared reducers
//   ...AllSharedReducers,
  navigation: navigationReducer,
  // You can override or add new reducers here
});
