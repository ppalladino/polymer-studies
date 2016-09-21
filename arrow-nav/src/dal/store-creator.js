define('store-creator', [], function() {
  function createStore(env, reducers, preloadedState) {
    return Redux.createStore(
      reducers,
      preloadedState
    )
  }

  return createStore;
});
