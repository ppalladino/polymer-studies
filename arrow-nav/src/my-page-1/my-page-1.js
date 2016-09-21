define('my-page-1', ['dal'], function(dal) {
  Polymer({

    is: 'my-page-1',

    properties: {
      route: Object,
      active: Boolean,
    },

    _handleTestClick: function() {
      console.log('CLICK');
    }

    // observers: [
    //   '_activeChanged(active)'
    // ],

    // _activeChanged: function(isActive) {
    //   if(isActive && !this.routeData.panel) {
    //     dal.actions.navigation.setRoute('/page-1/panel-1');
    //   }
    // },

    // attached: function() {
    //   console.log('my-page-1 attached');
    // }
  });
});
