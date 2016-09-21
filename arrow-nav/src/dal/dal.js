define('dal', ['store-creator', 'reducers', 'actions'], function(storeCreator, reducers, actions) {
  var env = 'dev'; // 'prod'
  var preloadedState = {}; // from localstorage/serverside/whatevs
  var store = storeCreator(env, reducers, preloadedState);
  var boundActionCreators = actions.bindActionCreators(store);

  return {
    store: store,
    actions: boundActionCreators,
  }
});
