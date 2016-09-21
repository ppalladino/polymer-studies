define('my-page-3', ['dal'], function(dal) {
  Polymer({

    is: 'my-page-3',

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
