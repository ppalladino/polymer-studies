define('my-app', ['dal', 'nav'], function(dal, nav) {
  var _currNavGroupList;
  var _currNavItemList;
  var _currNavGroup;
  var _currNavItem;

  function _setNavGroup(navGroupIdx) {
    _currNavGroupList = nav.getNavGroupList(document);
    _currNavGroup = _currNavGroupList[navGroupIdx];
    _currNavItemList = nav.getNavItemList(_currNavGroup);
    _setNavItem(0);
  }

  function _setNavItem(navItemIdx) {
    _currNavItem = _currNavItemList[navItemIdx];
    _currNavItem.element.focus();
  }

  function _handleNavEvent(navBehavior) {
    if(_currNavItem.isFirst && navBehavior === nav.navBehaviors.PREV_NAV_ITEM) {
      navBehavior = _currNavGroup.element.leftWrapBehavior;
    } else if(_currNavItem.isLast && navBehavior === nav.navBehaviors.NEXT_NAV_ITEM) {
      navBehavior = _currNavGroup.element.rightWrapBehavior;
    }

    switch (navBehavior) {
      case nav.navBehaviors.NEXT_NAV_ITEM:
        _setNavItem(_currNavItem.nextIdx);
        break;
      case nav.navBehaviors.PREV_NAV_ITEM:
        _setNavItem(_currNavItem.prevIdx);
        break;
      case nav.navBehaviors.NEXT_NAV_GROUP:
        _setNavGroup(_currNavGroup.nextIdx);
        break;
      case nav.navBehaviors.PREV_NAV_GROUP:
        _setNavGroup(_currNavGroup.prevIdx);
        break;
      case nav.navBehaviors.NOOP:
        // do nothing
        break;
      default:
        console.error('unhandled navBehavior: ' + navBehavior);
    }
  }

  Polymer({

    is: 'my-app',

    properties: {
      route: Object,
      keyEventTarget: {
        type: Object,
        value: function() {
          return document.body;
        }
      }
    },

    behaviors: [
      Polymer.IronA11yKeysBehavior,
    ],

    _loadState: function() {
      var state = dal.store.getState();

      if(!state.navigation.route) { return; }

      this.set('route', {
        prefix: '',
        path: state.navigation.route,
        __queryParams: {},
      });
    },

    keyBindings: {
      'space': '_onKeydown', // TODO: do init somewhere else
      'up': '_onKeydown',
      'down': '_onKeydown',
      'left': '_onKeydown',
      'right': '_onKeydown',
      'shift+left': '_onKeydown',
      'shift+right': '_onKeydown',
    },

    stopKeyboardEventPropagation: false,

    _onKeydown: function(event) {
      if(!_currNavGroup) {
        _setNavGroup(0);
        return;
      }

      switch (event.detail.combo) {
        case 'space':
          break;
        case 'left':
          _handleNavEvent(_currNavGroup.element.leftBehavior);
          break;
        case 'right':
          _handleNavEvent(_currNavGroup.element.rightBehavior);
          break;
        case 'up':
          _handleNavEvent(_currNavGroup.element.upBehavior);
          break;
        case 'down':
          _handleNavEvent(_currNavGroup.element.downBehavior);
          break;
        case 'shift+left':
          console.log('shift+left');
          break;
        case 'shift+right':
          console.log('shift+right');
          break;
        default:
          console.warn('unhandled key combo: ', event.detail.combo);
      }
    },

    attached: function() {
      console.log('app attached');
      this.unsubscribe = dal.store.subscribe(this._loadState.bind(this));
    },

    detached: function() {
      this.unsubscribe();
    }
  });
});
