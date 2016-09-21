define('actions', [
  'navigation-actions'
], function(navigationActions) {

  function bindActionCreators(store) {
    return {
      navigation: Redux.bindActionCreators(navigationActions, store.dispatch),
    };
  }

  return {
    bindActionCreators: bindActionCreators,
  }
});
