define('my-page-1-panel-1', ['dal'], function(dal) {
  Polymer({

    is: 'my-page-1-panel-1',

    properties: {
      route: Object,
    },

    observers: [
      '_routeDataDialogChanged(routeData.dialog)',
    ],

    _routeDataDialogChanged: function(dialog) {
      switch(dialog) {
        case 'dialog-1':
          this.$.dialog1.open();
          break;
        case 'dialog-2':
          this.$.dialog2.open();
          break;
      }
    },

    _onDialogClosed: function() {
      dal.actions.navigation.setRoute(this.route.prefix);
    },

    attached: function() {
      console.log('my-page-1-panel-1 attached');
    }
  });
});
