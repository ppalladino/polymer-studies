define('navigation-reducer', ['action-types'], function(actionTypes) {

  var initialState = {
    route: null,
  }

  function navigationReducer (state, action) {
    if (typeof state === 'undefined') {
      return initialState
    }

    switch(action.type) {
      case actionTypes.SET_ROUTE:
        return _.assign({}, state, {
          route: action.payload.route,
        });
      default:
        return state;
    }
  }

  return navigationReducer;
});
