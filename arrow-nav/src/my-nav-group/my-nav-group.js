define('my-nav-group', ['nav'], function(nav) {
  Polymer({

    is: 'my-nav-group',

    extends: 'div',

    properties: {
      navGroupName: {
        type: String,
      },
      upBehavior: {
        type: String,
        value: nav.navBehaviors.PREV_NAV_GROUP,
      },
      downBehavior: {
        type: String,
        value: nav.navBehaviors.NEXT_NAV_GROUP,
      },
      leftBehavior: {
        type: String,
        value: nav.navBehaviors.PREV_NAV_ITEM,
      },
      rightBehavior: {
        type: String,
        value: nav.navBehaviors.NEXT_NAV_ITEM,
      },
      leftWrapBehavior: {
        type: String,
        value: nav.navBehaviors.PREV_NAV_ITEM,
      },
      rightWrapBehavior: {
        type: String,
        value: nav.navBehaviors.NEXT_NAV_ITEM,
      },
    },
  });
});
