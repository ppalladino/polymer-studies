define('my-route-link', ['dal'], function(dal) {
  Polymer({

    is: 'my-route-link',

    properties: {
      label: String,
      routePrefix: String,
      routePath: String,
    },

    _onClick: function() {
      var route = '';

      if(this.routePrefix) {
        // Remove trailing slash
        route = this.routePrefix[this.routePrefix.length - 1] === '/'
          ? this.routePrefix.slice(0, this.routePrefix.length - 1)
          : this.routePrefix;
      }

      // Add slash to begining
      route += this.routePath[0] === '/'
        ? this.routePath
        : '/' + this.routePath;

      dal.actions.navigation.setRoute(route);
    },
  });
});
