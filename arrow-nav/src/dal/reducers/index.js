define('reducers', [
  'navigation-reducer',
], function(navigationReducer) {

  var initialState = {}

  return Redux.combineReducers({
    navigation: navigationReducer,
  })
});
