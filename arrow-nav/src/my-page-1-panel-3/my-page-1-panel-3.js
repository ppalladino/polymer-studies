define('my-page-1-panel-3', ['dal'], function(dal) {
  Polymer({

    is: 'my-page-1-panel-3',

    properties: {
    },

    ready: function() {
      //console.log('READY!', dal.store.getState());
      //actionCreators.setRoute('HELLO');
    },

    detached: function() {
      // unbind store
    }
  });
});
