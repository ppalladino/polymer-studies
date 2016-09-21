define('navigation-actions', ['action-types'], function(actionTypes) {
  return {
    setRoute: function(route) {
      // console.log('SET ROUTE', route);
      return {
        type: actionTypes.SET_ROUTE,
        payload: {
          route: route,
        }
      }
    }
  }
});
