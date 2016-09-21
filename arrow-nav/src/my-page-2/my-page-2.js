define('my-page-2', ['dal'], function(dal) {
  Polymer({

    is: 'my-page-2',

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
